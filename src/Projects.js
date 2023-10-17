import React from "react";
import "./Projects.css";
import shop from "./assets/shop.PNG";
import swiggy from "./assets/swiggy.png"
import stack from "./assets/stack.png"
import crm from "./assets/crm.jfif"
import dashboard from "./assets/Dashboard.PNG"

function Projects() {
  return (
    <div className="container-fluid about-sec project-sec" id="project">
      <div className="about-content">
        <div>
          <h1 className="about-primary">PROJECTS</h1>
          <div className="primary-bg head-line"></div>
        </div>
        <div className="project-para my-4">
          <p>
            Here you will find some of the personal projects that I created with
            each project containing its own case study
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row project-row">
            <div className="col-12 col-sm-6 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Swiggy image"
                  src={swiggy}
                />
                <div className="card-body">
                  <h4 className="card-title ">Swiggy</h4>
                  <p className="card-text">
                    {" "}
                    Developed a web application similar to Swiggy, a food
                    delivery platformThe application allows users to search for
                    restaurants, view menus, and place orders for delivery.
                  </p>
                  <p>
                    <strong>Key skills :</strong> CRUD, JWT
                  </p>
                  <div className="d-flex justify-content-between">
                    <a
                      href="https://github.com/Praveenraj-subramaniyan/swiggy-client/"
                      className="btn btn-gitrepo ms-5"
                      target="_blank"
                    >
                      Frontend
                    </a>
                    <a
                      href="https://github.com/Praveenraj-subramaniyan/swiggy-server/"
                      className="btn btn-gitrepo me-5"
                      target="_blank"
                    >
                      Backend
                    </a>
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <a
                      href="https://master--praveenswiggycloneapp.netlify.app/"
                      className="btn btn-live"
                      target="_blank"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  alt="stack overflow image"
                  src={stack}
                />
                <div className="card-body">
                  <h4 className="card-title ">Stack overflow</h4>
                  <p className="card-text">
                    {" "}
                    Created a web application that replicates the functionality
                    of StackOverflow.The application enables users to post
                    questions and answers.
                  </p>
                  <p>
                    <strong>Key skills :</strong> Redux, CRUD, JWT
                  </p>
                  <div className="d-flex justify-content-between">
                    <a
                      href="https://github.com/Praveenraj-subramaniyan/stack-overflow-client/"
                      className="btn btn-gitrepo ms-5"
                      target="_blank"
                    >
                      Frontend
                    </a>
                    <a
                      href="https://github.com/Praveenraj-subramaniyan/stack-overflow-server/"
                      className="btn btn-gitrepo me-5"
                      target="_blank"
                    >
                      Backend
                    </a>
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <a
                      href="https://stack-overflow-clone-praveenraj.netlify.app/"
                      className="btn btn-live"
                      target="_blank"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  alt="crm image"
                  src={crm}
                />
                <div className="card-body">
                  <h4 className="card-title ">CRM application</h4>
                  <p className="card-text">
                    {" "}
                    CRM software lets you store customer and prospect contact
                    information, identify sales opportunities, record service
                    issues, and manage marketing campaigns.
                  </p>
                  <p>
                    <strong>Key skills :</strong> CRUD, Admin control
                  </p>
                  <div className="d-flex justify-content-between">
                    <a
                      href="https://github.com/Praveenraj-subramaniyan/crm_client/"
                      className="btn btn-gitrepo ms-5"
                      target="_blank"
                    >
                      Frontend
                    </a>
                    <a
                      href="https://github.com/Praveenraj-subramaniyan/crm_server/"
                      className="btn btn-gitrepo me-5"
                      target="_blank"
                    >
                      Backend
                    </a>
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <a
                      href="https://stellar-rolypoly-618bc4.netlify.app/"
                      className="btn btn-live"
                      target="_blank"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  alt="crm image"
                  src={dashboard}
                />
                <div className="card-body">
                  <h4 className="card-title ">Dashboard</h4>
                  <p className="card-text">
                    {" "}
                    Build a modern web dashboard using Tailwind CSS for a sleek and responsive design. Integrate Firebase Authentication to enable secure Google Sign-In for users.
                  </p>
                  <p>
                    <strong>Key skills :</strong> Tailwind, Firebase Authentication
                  </p>
                  <div className="d-flex justify-content-between">
                    <a
                      href="https://github.com/spr887011/openinapp/"
                      className="btn btn-gitrepo ms-5"
                      target="_blank"
                    >
                      Frontend
                    </a>
                       <a
                      className="btn btn-gitrepo btn-gitrepo-disabled me-5"
                      disabled
                    >
                      Backend
                    </a>
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <a
                      href="https://praveenrajdashboard.netlify.app/"
                      className="btn btn-live"
                      target="_blank"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 my-4">
              <div className="card">
                <img className="card-img-top" alt="shop image" src={shop} />
                <div className="card-body">
                  <h4 className="card-title ">Shopping site</h4>
                  <p className="card-text">
                    {" "}
                    Online shopping commerce website which
                    allows consumers to directly buy goods or services from a
                    seller over the Internet
                  </p>
                  <p>
                    <strong>Key skills :</strong> CRUD, JWT
                  </p>
                  <div className="d-flex justify-content-between">
                    <a
                      href="https://github.com/Praveenraj-subramaniyan/shop-homepage/"
                      className="btn btn-gitrepo ms-5"
                      target="_blank"
                    >
                      Frontend
                    </a>
                    <a
                      href="https://github.com/Praveenraj-subramaniyan/shop-homepage-node/"
                      className="btn btn-gitrepo me-5"
                      target="_blank"
                    >
                      Backend
                    </a>
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <a
                      href="https://shop-home-page-clone.netlify.app/"
                      className="btn btn-live"
                      target="_blank"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
