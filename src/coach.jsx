import React from "react";
import coach from "./image/coach.png";
import abhi from "./image/abhi.jpg";
import yuvi from "./image/yuvi.jpg";
import {Fade} from "react-reveal";
let Coach = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row" id="shodowContainer">
                    <Fade left>
                    <div className="col-md-6 col-sm-12">
                        <p className="text-center text-light p-4">
                        Put simply, coaching is a process that aims to improve performance and focuses on the ‘here and now’ rather than on the distant past or future.
                        <br />
                        While there are many different models of coaching, here we are not considering the ‘coach as expert’ but, instead, the coach as a facilitator of learning.
                        <br />
                        There is a huge difference between teaching someone and helping them to learn. In coaching, fundamentally, the coach is helping the individual to improve their own performance: in other words, helping them to learn.
                        </p>
                        <div className="bg-light p-4">
                            <p className="text-center">
                                "Coaching is unlocking a person’s potential to maximise their own performance. It is helping them to learn rather than teaching them."
                            </p>
                        </div>
                    </div>
                    </Fade>
                    <Fade left>
                    <div className="col-md-6 col-sm-12 p-4">
                        <img src={coach} style={{height:"100%",width:"100%"}} alt="" />
                    </div>
                    </Fade>
                </div>
                <div className="container">
                    <div className="row">
                        <Fade left>
                        <div className="col-md-3 col-sm-12">
                            <div className="cardBlur mt-5 p-3">
                                <img src={yuvi} width="100%" alt=""/>
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-md-9 col-sm-12">
                            <div className="cardBlur mt-5 p-5">
                                    <h4 className="text-center"> <span className="text-dark">About the Director </span>
                                    | <b>YUVRAJ PATIL</b></h4>
                                    <hr />
                                <p className="text-center">
                                    He is a member of Apex council board of Maharashtra Cricket Association. He is also Secretary of North Maharashtra & Nandurbar District Cricket Association from '07. Yuvraj Patil is deeply involved in the game for the past 25 years.
                                    Yuvraj Patil have lot of experience in cricket field. In last 25 years of his cricketing carrier, He developed a many players who represented Maharashtra in saviour age group.
                                </p>
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-md-3 col-sm-12">
                            <div className="cardBlur mt-5 p-3">
                                <img src={abhi} width="100%" alt=""/>
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-md-9 col-sm-12">
                            <div className="cardBlur mt-5 p-5">
                                <h4 className="text-center"><span className="text-dark">About the Coach </span> | <b>ABHISHEK JANGID</b></h4>
                                <hr />
                                <p className="text-center">
                                Abhishek Jangid is probably the only qualified full time coach available 24x7x365 days. who has the unique experience for the coaching in cricketing field.
                                He Leads the Nandurbar District Cricket Association in MCA's Initational League 2017-21. Jangid is deeply involved in the game for the past 10 years.
                                </p>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );    
}
export default Coach;