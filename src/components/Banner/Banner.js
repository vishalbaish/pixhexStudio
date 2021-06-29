import React from 'react';
import "./Banner.css";
import Fade from 'react-reveal/Fade';

function Banner() {

    return (
        <header className="banner">
            <div className="banner_contents">
            <Fade left>
                <h1>
                    PRE PRODUCTION
                </h1>
                </Fade>
                <Fade right>
                <p className="banner_description">
                3D lighting is an important aspect of every 3D animation project. This is the process in which the light sources of the 3D environment, shades, shadows, and reflections are created. 3D animation lighting is much like photography or film: A combination of light sources to either draw attention to a special part of the setting set the overall mood of the scene or represent natural properties such as time of the day or even weather.
                </p>
                </Fade>  
            </div> 
        </header>
    )
}

export default Banner
