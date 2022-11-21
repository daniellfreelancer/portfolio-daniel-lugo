import React from "react";
import "../styles/NavBar.css"

export default function NavBar() {
    
  return (

    //   <nav className="navbar navbar-expand-lg div-nav">
    //     <div className="navbar-portfolio">
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span id="btn-burger" className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse navbar-portfolio-a " id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto gap-3">
    //           <li className="nav-item">
    //             <a id="myItem" className="navbar-brand" href="#about">
    //               Sobre mi
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="navbar-brand " href="#training">
    //               Capacitación
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="navbar-brand" href="#projects">
    //               Proyectos
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="navbar-brand" href="#contactMe">
    //               Contacto
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //           {/* <nav className="navbar pt-3">
    //     <div className="container d-flex justify-content-center gap-5 div-nav  ">
    //       <a className="navbar-brand" href="#about">
    //         Sobre mi
    //       </a>
    //       <a className="navbar-brand" href="#training">
    //         Capacitación
    //       </a>
    //       <a className="navbar-brand" href="#projects">
    //         Proyectos
    //       </a>
    //       <a className="navbar-brand" href="#contactMe">
    //         Contacto
    //       </a>
    //     </div>
    //   </nav> */}
    //   </nav>
      <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid ">
        <button className="navbar-toggler btn-out-burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon btn-burger "></span>
        </button>
        <div className="collapse navbar-collapse div-nav"  id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link navbar-brand" aria-current="page" href="#about">About me</a>
            <a className="nav-link navbar-brand" href="#training">Capacitación</a>
            <a className="nav-link navbar-brand" href="#projects">Proyectos</a>
            <a className="nav-link navbar-brand" href="#contactMe" >Contacto</a>
          </div>
        </div>
      </div>
    </nav>



  );
}
