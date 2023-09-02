import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="row home align-center" id="home" >
        <div className="d-flex align-items-center justify-content-center ">
      <div className="home-content  ">
        <div>
          <h1 className="heading-primary">Hey, I'm Praveenraj Subramaniyan</h1>
        </div>
        <div className="home-para">
          <p>
          I'm a versatile professional proficient in both front-end and back-end web development
           With expertise in designing user interfaces and managing server-side logic and databases, 
           Explore my projects to see how I bridge the gap between user experience and technical functionality.
           </p>
        </div>
        <a className="btn btn-primary my-project" href="#project">
          <span className="btn-span">My Projects</span>
        </a>
      </div>
      </div>
    </div>
  );
}

export default Home;
