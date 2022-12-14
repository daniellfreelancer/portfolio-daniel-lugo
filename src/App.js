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
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false)

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
     event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  if(isReadyForInstall) {
    downloadApp();
  }
  

  return (
    <div className="App">

      <NavBar />
      {/* <div className="container">
        <button className="btn btn-warning">Descargar</button>

      </div> */}
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
      <Footer/>
    </div>
  );
}

export default App;
