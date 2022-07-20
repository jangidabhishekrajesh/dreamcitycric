import React from "react";
import { Link } from "react-router-dom";
import dcca from "./image/dcca.png";
import {Fade} from "react-reveal";
import AboutMore from "./AboutMore";


let About = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row" id="shodowContainer">
                    <Fade left>
                    <div className="col-sm-8">
                        <div className="p-5">
                            <p className="text-light">
                                The Dream City Cricket Academy located in Dream City Society, Shahada, Maharashtra in India.
                                <br />
                                <br />
                                The DCCA was the brainchild of cricket administrator and NDCA Secretary Yuvraj Patil.
                                <br />
                                <br />
                                The academy was established in 2019 as a cricket facility of the Nandurbar District Cricket Association for training young cricketers who are identified as having the potential to represent the Maharshtra Cricket Team As Well As Indian cricket team.
                                <br /> 
                                <br />                   
                                In 2020, NDCA decided to make these changes along the lines of the state-of-the-art high-performance centres based in Nandurbar and Taloda as part of the revamp of the Dream City Cricket Cricket Academy.
                                <br />
                                Current director of the DCCA is the former secretary of North Maharashtra Zone <b>Yuvraj Patil</b>.
                                <Link to="/coach" style={{textDecoration:"none", color:"orange"}}> Info+</Link>
                            </p>
                        </div>
                    </div>
                    </Fade>
                    <Fade left>
                    <div className="col-sm-4">
                        <div className="p-5">
                            <img src={dcca} width="100%" alt=""/>
                        </div>
                    </div>
                    </Fade> 
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <Fade left>
                        <div className="col-lg-10 my-3 cardBlur p-5">
                            <h5 className="text-center">
                            "The foundation of the Dream City Cricket Academy was laid by <b>Mr. Yuvraj Patil</b> & <b>Mr. Abhishek Jangid</b>, with the sole aim of providing an excellent platform for aspiring cricketers with quality training methods, world-class infrastructure, and the opportunity to learn from experts in the field of cricket, through a congenial and innovative environment. Academy Area The cricket academy spans over an 30000 sq feet land at Khetiya Road, Shahada, and is equipped with state-of- the-art training facilities. Our Techniques This all-year- round academy integrates the best in cricketing techniques, technology, fitness, mind games and coaches to create the World-Class Cricketer of Tomorrow. Our Strength For the overall development of the young cricketer, strength improvement through."
                            </h5>
                        </div>
                    </Fade>
                </div>
            </div>

            <AboutMore/>
        </>
    );
}
export default About;