import React from 'react';
import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.about__wrap} id='about'>
                <h2 className={classes.about__title}>
                    About me
                </h2>
                <div className={classes.about__block}>
                    <div className={classes.about__card} id='animated'>
                        <h3 className={classes.about__desc}>
                            personal info
                        </h3>
                        <p className={classes.about__details}>
                            I am 19 y.o. and i have passion to IT. I consider myself as an open-minded to all new person so my own way begins!
                        </p>
                    </div>
                    <div className={classes.about__card} id='animated'>
                        <h3 className={classes.about__desc}>
                            education
                        </h3>
                        <p className={classes.about__details}>
                            Now i study in Odesa National Polytechnic University as data analyst and data scientist.
                            In 2023 I will receive a bachelor's degree.
                        </p>
                    </div>
                    <div className={classes.about__card} id='animated'>
                        <h3 className={classes.about__desc}>
                            skills
                        </h3>
                        <p className={classes.about__details}>
                            I have good knowledge of JS, principles (ECMAScript 6+), deep knowledge of HTML5, CSS3
                            and CSS pre-processor SASS, basic knowledge of React, C1 English level and B1+ German
                        </p>
                    </div>
                    <div className={classes.about__card} id='animated'>
                        <h3 className={classes.about__desc}>
                            achievements
                        </h3>
                        <p className={classes.about__details}>
                            In 2021 I attended Front-End Basic and Front-End Pro courses by Hillel IT School and
                            successfully graduated with 2 diplomas of Excellent level. In 2019 I took my first International
                            English Exam (FCE) and got International Diploma B2 Level. In 2021 i took C1 (CAE) English Exam
                        </p>
                    </div>
                    <div className={classes.about__card} id='animated'>
                        <h3 className={classes.about__desc}>
                            interests
                        </h3>
                        <p className={classes.about__details}>
                            I have a wide range of interest, some of them are linked with IT technologies.
                            Besides learning more and more in IT sphere, i also found myself in photography and
                            photo processing. In addition i keep on learning languages and improving my knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;