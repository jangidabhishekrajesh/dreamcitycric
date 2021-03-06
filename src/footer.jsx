import React from "react";
import { Link } from "react-router-dom";
import dcca from "./image/dcca.png"

let Footer = () => {
    return(
        <>
            <footer className="container-fluid mt-5 justify-content-center text-dark">
                <div className="row justify-content-center p-5">
                    <div className="col-12">
                        <div className="row ">
                            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 col-auto">
                                <img className="footerImg" src={dcca} width="80" alt=""/>
                            </div>
                            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 col-auto">
                                <h6 className="mb-3 mb-lg-4 bold-text text-light"><b>MENU</b></h6>
                                <ul className="list-unstyled">
                                    <Link to="/about" id="linkHover"><li>About</li>
                                    </Link>
                                    <Link to="/player" id="linkHover"><li>Players</li>
                                    </Link>
                                    <Link to="/coach" id="linkHover"><li>Coaches</li>
                                    </Link>
                                    <Link to="/admission" id="linkHover"><li>News & More</li>
                                    </Link>
                                    <Link to="/contact" id="linkHover"><li>Contact Us</li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 col-auto text-light">
                                <h6 className="mb-3 mb-lg-4 bold-text"><b>ADDRESS</b></h6>
                                <a href="https://g.page/Dreamcitycric?share"><span className="addRess">
                                Behind Reshmai Naturopathy,
                                <br /> Khetiya Road, Dream City Society, Maloni, <br /> Shahada,
                                Maharashtra, 425409
                                </span></a>
                            </div>
                            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 col-auto text-light">
                            <small className="rights text-center"><span>&#174;</span> Dream City Cricket Academy | All Rights Reserved.</small>
                            <br />
                            <hr />
                            <h6 className="text-light">Follow Us On</h6>
                                <div className="icon p-1" id="bg-light">
                                    <a href="http://www.instagram.com/dreamcitycric"><i className="fab fa-instagram-square text-danger fa-2x"></i></a> &nbsp;&nbsp;&nbsp;
                                    <a href="http://www.facebook.com/dreamcitycric"><i className="fab fa-facebook-square text-primary fa-2x"></i></a> &nbsp;&nbsp;&nbsp;
                                    <a href="https://api.whatsapp.com/send?phone=918668261315&text=Contact%20Us"><i className="fab fa-whatsapp-square text-success fa-2x"></i></a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="http://www.linkedin.com/in/abhishekjangid18" target="_blank" rel="noreferrer"><i className="fab fa-linkedin text-info fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;