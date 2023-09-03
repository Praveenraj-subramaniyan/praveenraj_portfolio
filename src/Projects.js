import React from "react";
import "./Projects.css";
import shop from "./assets/shop.PNG";

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
                  src="data:image/png;base64,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"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYcfF5apxyC6XkRgWDoECTWTHiFJ-u27f9I-b6JdnM90sEH_g8NyhKjE_NJXYyOzEo4K4&usqp=CAU"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBJ5lJYnKf8FiWs89usqtW_5SQOEo-kb7oA&usqp=CAU"
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
                <img className="card-img-top" alt="shop image" src={shop} />
                <div className="card-body">
                  <h4 className="card-title ">Shopping site</h4>
                  <p className="card-text">
                    {" "}
                    Online shopping is a form of electronic commerce which
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
