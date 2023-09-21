import resume from "./assets/Praveenraj_resume.pdf"
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

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
              className="navbar-toggler mx-3"
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
                  <a className="nav-link" href="#Contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item mx-1 btn-resume-div">
                <a href="https://drive.google.com/file/d/1yCYeEZ94vsNrOPZFEssmY6liB_V842K-/view?usp=drive_link" target="_blank" className="btn btn-resume py-1 mt-1">Resume
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
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
