import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="row home align-center" id="home">
      <div className="d-flex align-items-center justify-content-center ">
        <div className="home-content  ">
          <div>
            <h1 className="heading-primary">
              Hey, I'm Praveenraj Subramaniyan
            </h1>
          </div>
          <div className="home-para">
            <p>
              I'm a versatile professional proficient in both front-end and
              back-end web development With expertise in designing user
              interfaces and managing server-side logic and databases, Explore
              my projects to see how I bridge the gap between user experience
              and technical functionality.
            </p>
          </div>
          {/* <a className="btn btn-primary my-project" href="#project">
          <span className="btn-span">My Projects</span>
        </a> */}
          <a
            href="https://github.com/orgs/Praveenraj-subramaniyan/repositories"
            target="_blank"
          >
            <button class="btn btn-dark home-social-btn">
              <i class="fa fa-github px-2"></i>Github {" "}
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-raj-132bbb22a/"
            target="_blank"
          >
            <button class="btn btn-primary home-social-btn">
              <i class="fa fa-linkedin px-2"></i>LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
