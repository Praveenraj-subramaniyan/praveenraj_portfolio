import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container-fluid about-sec section-bg" id="About">
      <div className="about-content">
        <div>
          <h1 className="about-primary">ABOUT ME</h1>
          <div className="primary-bg head-line"></div>
        </div>
        <div className="about-para">
          <p>
            Here you will find more information about me, what I do, and <br />{" "}
            my current skills mostly in terms of programming and technology{" "}
          </p>
        </div>

        <div className="row about__content-details-row">
          <div className="col-12 col-sm-6">
            <h4 className="">Get to know me!</h4>
            <p className="about-content-details-para">
              I'm a Full Stack Developer specializing in both the front-end and
              back-end aspects of Websites and Web Applications, driving success
              for the entire product. Explore my diverse portfolio of projects
              in the Projects section.
            </p>

            <p className="about-content-details-para">
              In terms of work experience, I have worked as a Software Developer
              at Syncfusion Software, where I gained valuable experience in web
              application development using ASP.NET Core. I have expertise in
              Windows application development using Final Builder, WIX, and
              bootstrapper. I am also familiar with Azure DevOp, database
              migration, GIT, and AWS Cloud.
            </p>
          </div>
          <div className="col-12 col-sm-6 my-skills">
            <h4 className="col-6">My Skills</h4>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">Bootstrap</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">C#</div>
              <div className="skills__skill">React JS</div>
              <div className="skills__skill">Node JS</div>
              <div className="skills__skill">Mongo DB</div>
              <div className="skills__skill">SQL</div>
              <div className="skills__skill">Github</div>
              <div className="skills__skill">Azure DevOps</div>
            </div>
          </div>

          <div className="col-12">
            <a className="btn btn-primary" href="#contact">
              <span className="btn-span">Contact Me!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
