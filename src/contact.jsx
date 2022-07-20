import React, { useRef } from "react";
import { useState } from "react";
import bhishe from "./image/bhishe.jpg";
import { Fade } from "react-reveal";
import emailjs from "@emailjs/browser";

let Contact = () => {

  const [formData, setFormData] = useState({});

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    if (form.current.reportValidity()) {
      emailjs
        .send(
          "service_jnyodvd",
          "template_kaltlrk",
          formData,
          "user_x3IQfffqEgzUjf7uOjR9Z"
        )
        .then(
          (result) => {
            console.log(result.text);
            window.location.href = window.location.origin + "/thankyou";
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <>
      <div className="container">
        <Fade left>
          <div className="row my-5">
            <div className="col-md-9 col-sm-12">
              <div className="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6452410660518!2d74.4772039140385!3d21.560722674782742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf6d775487a6cd%3A0xf738ce59576d215e!2sDream%20City%20Cricket%20Academy!5e0!3m2!1sen!2sin!4v1628661500771!5m2!1sen!2sin"
                  title="map"
                  height="315"
                  style={{ border: "0", width: "100%" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
              <div className="mt-3">
                <img
                  src={bhishe}
                  height="315"
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="text-center card cardBlur mt-3">
            <big>DREAM CITY CRICKET ACADEMY</big>
            <br />
            <small className="text-muted">
              DCCA, OPERATES SEVEN DAYS A WEEK from 06:00 TO 21:00.
            </small>
            <br />
            <b>MALONI:</b>
            <br />
            <span>
              Behind Reshmai Naturopathy,
              <br /> Khetiya Road, Dream City Society, Maloni, Shahada,
              Maharashtra, 425409,
              <br /> Mob: +919403080104, +918668261315, +919767084719
            </span>
          </div>
        </Fade>

        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <Fade left>
              <form
                ref={form}
                className="card cardBlur my-5"
                id="contact"
                name="contact"
              >
                <div className="col-12">
                  <h2 className="text-center">Get In Touch</h2>
                  <hr />
                </div>
                <div className="my-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={(event) => {
                      setFormData({ ...formData, name: event.target.value });
                    }}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    onChange={(event) => {
                      setFormData({ ...formData, email: event.target.value });
                    }}
                  />
                </div>
                <div className="form-floating my-3">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="message"
                    rows="8"
                    onChange={(event) => {
                      setFormData({ ...formData, message: event.target.value });
                    }}
                  ></textarea>
                  <label htmlFor="message">
                    <small>Tell us! What you think about DCCA?</small>
                  </label>
                </div>
                <button
                  onClick={(event) => sendEmail(event)} type="submit" name="submit"
                  className="btn btn-primary my-5"
                >
                  Submit
                </button>
              </form>
            </Fade>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
};
export default Contact;
