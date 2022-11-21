import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import Certifieds from "./components/Certifieds";
import Training from "./components/Training";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";
import Tech from "./components/Tech";
import VideoWelcome from "./components/VideoWelcome";
import Mobile from "./components/Mobile";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <div className="App">
      <NavBar />
      <VideoWelcome />
      <Tech />
      <main>
        <AboutMe />
        <Experience />
        <Certifieds />
        <Training />

        <div>
          <hr className="divider" />
        </div>
        <div className="div-separetor" id="projects">
          <h2>Proyectos</h2>
        </div>
        <div className="container d-flex justify-content-center py-5 flex-wrap gap-5">
          <Projects />
        </div>
        <Mobile/>
        <ContactMe />
        <ScrollToTop/>
      </main>
    </div>
  );
}

export default App;
