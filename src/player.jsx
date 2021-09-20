import React from "react";
import play from "./image/play.jpg";
import playe from "./image/playe.jpeg";
import pla from "./image/pla.jpg";
import abhijangid from "./image/abhijangid.JPG";
import crick3 from "./image/crick3.jpeg";
import crick4 from "./image/crick4.jpg";
import crick5 from "./image/crick5.jpg";
import crick1 from "./image/crick1.jpg";
import squad from "./image/squad.png";
import kids from "./image/kids.jpeg";
import {Fade} from "react-reveal";



let Player = () => {
    return(
        <>
            <div className="container-fluid mb-5">
                <Fade top >
                <div className="col-12 text-primary">
                    <h2 className="text-center p-2">OUR PLAYERS</h2>
                </div>
                </Fade>
                <div className="row">
                <Fade left cascade>
                    <div className="col-md-7">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators mb-5">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={kids} height="400" className="d-block w-100" alt="..."/>
                                <h6 className="text-center mt-3">LITTLE CHAMPS</h6>
                            </div>
                            <div className="carousel-item">
                                <img src={play} height="400" className="d-block w-100" alt="..."/>
                                <h6 className="text-center mt-3">ANAND BIRARE</h6>
                            </div>
                            <div className="carousel-item">
                                <img src={pla} height="400" className="d-block w-100" alt="..."/>
                                <h6 className="text-center mt-3">PUSHPAK PATEL</h6>
                            </div>
                            <div className="carousel-item">
                                <img src={playe} height="400" className="d-block w-100" alt="..."/>
                                <h6 className="text-center mt-3">ANIKET INDRAJEET</h6>
                            </div>
                            <div className="carousel-item">
                                <img src={abhijangid} height="400" className="d-block w-100" alt="..."/>
                                <h6 className="text-center mt-3">LATIKESH PATIL</h6>
                            </div>
                            <div className="carousel-item">
                                <img src={crick3} height="400" className="d-block w-100" alt="..."/>
                                <h6 className="text-center mt-3">RAJVEER PATIL</h6>
                            </div>
                            <div className="carousel-item">
                                <img src={crick4} height="400" className="d-block w-100" alt="..."/>
                                <h6 className="text-center mt-3">JAYDEV PATEL</h6>
                            </div>
                            <div className="carousel-item">
                                <img src={crick5} height="400" className="d-block w-100" alt="..."/>
                                <h6 className="text-center mt-3">RUDRA PATEL</h6>
                            </div>
                        </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <hr />
                        <img className="mt-3" src={crick1} style={{width:"100%"}} alt="" />
                    </div>
                    </Fade>
                    <Fade right cascade>
                    <div className="col-md-5 cardBlur p-3">
                        <h2 className="text-center">A Player!</h2>
                        <hr />
                        <p className="p-3">A Good cricket player has a strong muscular reflex.
                            <br /><br />
                            -एक अच्छे क्रिकेट खिलाड़ी का मज़बूत पेशी -प्रतिवर्त होता है।
                        
                            A captain should never ask a player to do anything which he would not be prepared to do himself.
                            <br /><br />
                            -किसी भी कप्तान को अपने साथी खिलाडियों से ऐसा कोई काम करने के लिए नहीं कहना चाहिए जो कि वह स्वयं करने के लिए तैयार न हो। 
                          
                            A player who is capable of doing both batting and bowling is known as all rounder.
                            <br /><br />
                            -एक खिलाड़ी जो बल्लेबाजी और गेंदबाजी दोनों का विशेषज्ञ होता है हरफनमौला कहलाता है।  
                        
                            A player who is nervous will not make much headway.
                            <br /><br />
                            -जो खिलाड़ी घबराता है वह इस खेल में ज्यादा सफल नहीं हो सकता। 
                        
                            "Success की सबसे खास बात है की, वो मेहनत करने वालों पर फ़िदा हो जाती है |"
                        </p>
                        <hr />
                        <img src={squad} style={{width:"100%"}} alt="" />
                        <hr />
                        <p>
                        खेल में अपना प्रर्दशन इस प्रकार दिखाओ की सामने वाली विरोधी टीम का प्रत्येक खिलाड़ी आपके लिए तालियां बजाने लग जाये।
                        </p>
                    </div>
                    </Fade>
                </div>
            </div>
        </>
    );
}
export default Player;