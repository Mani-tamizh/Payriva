import React from 'react';
import Typewriter from 'typewriter-effect';
import {Link} from "react-router-dom";


const IntroThree = () => {
    return (
        <div className="intro-section section overlay" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/hero-4.jpg)`}}>

            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">

                    <div className="col align-self-center">
                        <div className="intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                            <h2 className="title ah-headline">
                            <Typewriter
                                options={{
                                    strings: ["Technology Advisory", "Digital Transformation", "Software Development", "Engineering Innovation", "Virtual CTO"],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 10
                                }}
                            />
                            </h2>
                            <div className="desc">
                                <p>We are an agency located in New York. We think strategy, craft design,
                                    develop digital and create motion. To forward your brand and business.</p>
                            </div>
                            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-secondary">Get Started</Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-outline-white btn-hover-primary"> Learn More </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default IntroThree
