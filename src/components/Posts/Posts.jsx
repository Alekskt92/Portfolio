import React, {useState} from 'react';
import {SliderData} from "./SliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/all";
import classes from './Posts.module.css';

const Posts = ({slides}) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}

if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}
    return(
        <div className={classes.slider} id='posts'>
            <h3 className={classes.interests__title}>Posts</h3>
            <FaArrowAltCircleLeft className={classes.left__arrow}  onClick={prevSlide} />
            <FaArrowAltCircleRight className={classes.right__arrow} onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt='image' className={classes.image} />)}
                    </div>
                )
            })}
        </div>
    )
}

export default Posts;