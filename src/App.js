import profile from "./assets/profile.jpg";
import resume from "./assets/praveen raj s_resume.pdf"
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container-fluid" style={{alignItems:"flex-start"}}>
          <div className="" >
            <a className="navbar-brand " href="#">
              <span className="header-name-content">Praveenraj</span>
            </a>
          </div>
          <form className="">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-3">
                <li className="nav-item mx-3">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#About">
                    About
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#project">
                    Projects
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#skills">
                    Contacts
                  </a>
                </li>
                <li className="nav-item mx-1 btn-resume-div">
                <a href={resume} target="_blank" className="btn btn-resume py-1 mt-1">Resume
                      <i className="fa fa-download px-2 btn-resume-icon"></i> </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
   
        <Home/>
        <About/>
        <Projects/>
    </div>
  );
}

export default App;
