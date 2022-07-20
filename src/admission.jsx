import React, { useState, useEffect } from "react";
import axios from "axios";


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


  return (
    <>
      <div className="container">
        <div className="row" id="row">
          <h3 className="my-5">Recent News</h3>
          {admission &&
            admission.map((item, idx) => (
              <div className="col-md-4 col-sm-12" key={idx} id="col-md-4">
                <div className="cardBlur my-3">
                  <div>
                    <p className="headlineUrl">Head Line</p>
                    <p className="my-3 urlTitle">
                      <small>{item.title}</small>
                    </p>
                    <b>Read More &#x2193;</b>
                    <p className="my-3">
                      <small>
                        <a
                          href={item.url}
                          className="url"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.url}
                        </a>
                      </small>
                    </p>
                    <img
                      className="urlToImg"
                      src={item.urlToImage}
                      alt="img"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <p className="urlDate my-3">Date & Time</p>
                    <p className="url">
                      <small>{item.publishedAt}</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Admission;
