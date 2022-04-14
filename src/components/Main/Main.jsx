import React from 'react';
import classes from './Main.module.css';

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.main__wrap}>
                <nav className={classes.nav}>
                    <ul className={classes.nav__list}>
                        <li className='item'>
                            <a className={classes.list__item}
                               href='#'>
                                Home
                            </a>
                        </li>
                        <li className='item'>
                            <a className={classes.list__link}
                               href='../About/About.jsx#about'>
                                About me
                            </a>
                        </li>
                        <li className='item'>
                            <a className={classes.list__link}
                               href='../Interests/Interests.jsx#posts'>
                                Posts
                            </a>
                        </li>
                        <li className='item'>
                            <a className={classes.list__link}
                               href='../Social/Social.jsx#social'>
                                Social
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={classes.banner}>
                    <div className={classes.card}>
                        <img className={classes.card__pic}
                             src='https://www.teahub.io/photos/full/11-111290_wallpaper-mountains-forest-clouds-mountain-range-mountain-range.jpg'
                             alt='picture'
                        />
                        <p className={classes.card__desc}>
                            Alexandr Kutuyev
                        </p>
                        <p className={classes.card__desc}>
                            19 years old
                        </p>
                        <p className={classes.card__desc}>
                            Odesa, Ukraine
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;