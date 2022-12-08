import React from "react";
import "../styles/Aboutme.css";

export default function AboutMe() {
  return (
    <div className="div-cointainer-about container">
      <div className="img-aboutme">
        <img
          src="http://drive.google.com/uc?export=view&id=1zMZliJOjk7yUVdRE_2uEmP9FR0-WindT"
          alt="aboutme"
          className="img-about"
        />
      </div>
      <div className="div-about-me" id="about">
        <h2>Sobre mi</h2>

        <p>
          Soy Desarrollador Full Stack MERN. Tengo experiencia en el manejo de
          diferentes tecnologías, MongoDB, Express, JavaScript, React.js, las
          cuales incrementé en mi última capacitación en un Bootcamp Full Stack
          de más 700 hrs de práctica, así como el manejo de metodologías ágiles.
          He trabajado como desarrollador web Front-End en diferentes proyectos,
          soy una persona que se adapta muy fácilmente al entorno de trabajo
          remoto, proactivo y presente en la creatividad de los proyectos que me
          son asignados. El trabajo en equipo, la organización y la
          planificación son mi principal aporte para alcanzar los objetivos en
          cada proyecto que he participado. Actualmente trabajo día a día en
          seguir creciendo en el ámbito profesional IT y desarrollo personal. Mi
          objetivo es formar parte de una empresa donde pueda brindar mis
          conocimientos para el logro de objetivos de cada proyecto y que, a su
          vez, me permita adquirir nuevas habilidades y seguir superándome.
        </p>
      </div>
    </div>
  );
}
