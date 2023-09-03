import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div className="row text-white bg-dark">
      <div className="col-12 my-footer">
        <div className="row my-footer-row">
          <div className="col-6 footer-head-div">
            <h4 className="footer-head">Praveenraj subramaniyan</h4>
          </div>
          <div className="col-12 col-sm-6 text-center">
            <h4 className="footer-head">CONTACT</h4>
            <div>
              <ul className="contact-list">
                <a href="tel:+918870118193" target="_blank">
                  <li className="bg-white">
                    <i className="fa fa-phone text-dark"></i>
                  </li>
                </a>
                <a href="mailto:spr887011@gmail.com" target="_blank">
                  <li className="bg-white">
                    <i className="fa fa-envelope text-dark"></i>
                  </li>
                </a>
                <a href="https://github.com/Praveenraj-subramaniyan" target="_blank">
                  <li className="bg-white">
                    <i className="fa fa-github text-dark"></i>
                  </li>
                </a>
                <a href="https://www.linkedin.com/in/praveen-raj-132bbb22a/" target="_blank">
                  <li className="bg-white">
                    <i className="fa fa-linkedin text-dark"></i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
