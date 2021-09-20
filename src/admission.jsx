import React, { useState, useEffect } from "react";
import axios from "axios";
import {Fade} from "react-reveal";

let Admission = () => {

    const [admission, setAdmission] = useState();
    
    const getAPIData = async () => {
    try {
    const { data } = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a37f46d08330467b956ccf1838e919b2"
    ); 

    setAdmission(data.articles);
    } catch {}
  };
  useEffect(() => { 
    getAPIData();
  }, []);

    return(
        <>
            <div className="container-fluid">
                <div className="col-12">
                    <h2 className="text-center text-primary p-2">News And More</h2>
                </div>
                <div className="row" id="shodowContainer">
                    <div className="col-md-12 col-sm-12">
                        <h3 className="text-light p-3 mt-4">
                            Our Culture & Little Bit About Work!
                        </h3>
                        <div className="cardBlur p-5 mb-5">
                            <Fade right cascade>

                            <h3 className="mb-5">Values Of DCCA!</h3>
                            </Fade>
                            <Fade left cascade>
                            <h5>RESPECT</h5>
                            <small>Respect for others is one of the basic requirements of democratic life and the capacity to live in society. It affects the individual and has both a social and a collective dimension. Respect is a fundamental part of a sport, for sport generates situations of tension that have to be resolved almost instantaneously. There is, therefore, a need, above rules and standards, for this value to be present in order to guarantee cordial and correct interrelations between people. In sport, respect is needed in similar situations to those where it is demanded in wider society, but the intensity of the moment implies that the presence or absence of respect can be very obvious and can affect the development of the situation or event.</small></Fade>
                            <hr />
                            <Fade right cascade><h5>EFFORTS</h5>
                            <small>There are many social models that avoid effort and advocate instead luck, opportunism, and immediate triumph. However, the effort is a value that can take us to unthinkable heights and lead us to achieve targets and objectives that may at other times appear distant or inaccessible. Dedication, rigour, constancy, sacrifice, and perseverance all bear fruit, while luck and the search for a quick win are often fleeting and momentary. Note that at school, teachers have for a long time is promoting a culture of effort as the vehicle for academic development and personal achievement, and this helps to construct new social models.</small></Fade>
                            <hr />
                            <Fade left cascade><h5>AMBITION</h5>
                            <small>Ambition is the desire to achieve the maximum performance and do things not only well but also as well as is feasibly possible and to improve every day. This value is applicable both to individuals and to groups. It involves the use of a web of values as varied as excellence, patience, discipline, order, motivation, and responsibility. Indeed, ambition invokes and requires a broad system of values and, in turn, is related to a job being done well, effort and rigour. Regarding targets, ambition is probably the surest way of achieving them, for it is the impulse to grow.</small></Fade>
                            <hr />
                            <Fade right cascade><h5>TEAMWORK</h5>
                            <small>Teamwork implies that the subject forms part of a group and that, as a member of the same, becomes an active element that acts on behalf of the whole (sometimes even to the determine of their own individuality). There are undeniable benefits of knowing that you are part of a team and this requires the learning and accentuation of many other values.</small></Fade>
                            <hr />
                            <Fade left cascade><h5>HUMILITY</h5>
                            <small>Often when athletes, and people in general, achieve the goals they have set themselves, they start feeling superior in physical, moral, economic and other terms, and this leads them to forget certain values that have in all probability helped them to achieve those very goals: effort, perseverance, self-control, etc. We are all aware of how DCCA has dealt with its victories of recent years, and how it has always shown humility (and also such values as effort, rigour, responsibility, and others) to win respect in its field, and among its opponents, and generally everyone. Humility probably consists of knowing how to be clear about one’s values, and to maintain them and defend them even in situations where you are clearly superior and more successful.</small></Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h3 className="p-3 mt-4">
                        Recent News
                    </h3>
                    {admission && admission.map((item, idx) => 
                    <div className="col-md-4 col-sm-12" key= {idx}>
                        <div className="cardBlur m-1 p-2">
                            <ul style={{listStyle:'none'}}>
                                <b>Head Line</b>
                                <li><small>{item.title}</small></li>
                                <b>For More! Click Link</b>
                                <li><small><a href={item.url} target="_blank" rel="noreferrer">{item.url}</a></small></li>
                                <img className="urlToImg" src={item.urlToImage} alt="img" style={{width:"100%", height:"70%"}}/>
                                <b>Date & Time</b >
                                <li><small>{item.publishedAt}</small></li>
                            </ul>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    );
}
export default Admission;
