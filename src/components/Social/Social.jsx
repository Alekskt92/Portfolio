import React from 'react';
import classes from './Social.module.css';

const Social = () => {
    return(
        <div className={classes.social}>
            <div className={classes.social__wrap} id='social'>
                <h3 className={classes.social__title}>
                    Social
                </h3>
                <p className={classes.social__block}>
                    <a href='https://drive.google.com/file/d/1tgoPzhrO6ka0pRyMVFrt_sS6_SJDh0vU/view?usp=sharing' download className={classes.social__cv}>
                        Download CV
                    </a>
                </p>
                <p className={classes.social__title}>
                    Social Networks
                </p>
                <div className={classes.network}>
                    <div className={classes.network__block}>
                    <span className={classes.network__desc}>
                        GitHub
                    </span>
                        <a href='https://github.com/Alekskt92/JSTasks' className={classes.network__link}>
                            Link
                        </a>
                    </div>
                    <div className={classes.network__block}>
                    <span className={classes.network__desc}>
                        LinkedIn
                    </span>
                        <a href='https://www.linkedin.com/in/alexandr-kutuyev-1b7759225/' className={classes.network__link}>
                            Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social;