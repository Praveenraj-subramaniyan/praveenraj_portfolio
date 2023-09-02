import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleData(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setSendMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "https://portfolionode-guui.onrender.com/bot";
    axios
      .post(url, sendMessage)
      .then((res) => {
        alert("Message sent successfully");
      })
      .catch((error) => {
        alert("Error in sending message");
      });
    setSendMessage({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div
      className="container-fluid about-sec section-bg my-contact"
      id="Contact"
    >
      <div className="about-content">
        <div>
          <h1 className="about-primary">CONTACT</h1>
          <div className="primary-bg head-line"></div>
        </div>
        <div className="contact-para my-4">
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>

        <div className="row my-contact-details">
          <div className="row bg-white my-contact-row">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <div className="my-contact-input">
                  <lable className="contact__form-lable">Name</lable>
                  <input
                    className="contact__form-input  input-background"
                    value={sendMessage.name}
                    onChange={handleData}
                    placeholder="Enter Your Name"
                    type="text"
                    name="name"
                    required
                  />
                </div>

                <div className="my-contact-input">
                  <lable className="contact__form-lable ">Email</lable>
                  <input
                    className="contact__form-input  input-background"
                    value={sendMessage.email}
                    onChange={handleData}
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    required
                  />
                </div>

                <div className="my-contact-input">
                  <lable className="contact__form-lable ">Message</lable>
                  <textarea
                    className="contact__form-input  input-background text-msg"
                    value={sendMessage.message}
                    onChange={handleData}
                    placeholder="Enter Your Message"
                    type="text"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className="send-div">
                  <button className="btn btn-send send-btn" type="submit">
                    <span className="">Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
