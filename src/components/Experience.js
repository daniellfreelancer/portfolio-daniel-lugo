import React from "react";
import '../styles/Experience.css'

export default function Experience() {
  return (
    <>
      <div>
        <hr className="divider" />
      </div>
      <div className="div-separetor">
        <h2>Experiencia</h2>
      </div>

      <div className="container gap-5 py-5 div-experiencia">
        <div className="card-container">
          <span className="pro bg-warning">Actual</span>
          <img
            className="round w-50 img-experience"
            src="http://drive.google.com/uc?export=view&id=1wb0YX9ZUc99HQbZdniGFVAJMKySAc6xJ"
            alt="user"
          />
          <h3 className="p-1">Fundación Retorno a la Libertad</h3>
          <h6>Fullstack Developer</h6>
          <p>Septiembre 2022</p>
          <div className="skills">
            <h6>Tecnologías</h6>
            <ul>
              <li>MongoDB</li>
              <li>Heroku</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Maquetado WEB</li>
              <li>Express</li>
              <li>React Native</li>
              <li>Axios</li>
              <li>Redux</li>
              <li>Git & Github</li>
              <li>Bootstrap</li>
              <li>Jira</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
        <div className="card-container">
          <img
            className="round w-50"
            src="http://drive.google.com/uc?export=view&id=1O5F-nGBnSW7Ks9jLJxp4L3x9IajhA1cP"
            alt="user"
          />
          <h3 className="p-1">Bootcamp Fullstack MERN & Mobile</h3>
          <h6>Fullstack Developer</h6>
          <p>Julio 2022 - Octubre 2022</p>
          <div className="skills">
            <h6>Tecnologías</h6>
            <ul>
              <li>MongoDB</li>
              <li>Heroku</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Maquetado WEB</li>
              <li>Express</li>
              <li>React Native</li>
              <li>Axios</li>
              <li>Redux</li>
              <li>Git & Github</li>
              <li>Bootstrap</li>
              <li>Github Project</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
        <div className="card-container">
          <img
            className="round w-50"
            src="http://drive.google.com/uc?export=view&id=1jnMTJq62MDFkd8utBSFMg352tu0fr10Z"
            alt="user"
          />
          <h3>Sociedad Médica de Urología de Venezuela</h3>
          <h6>Frontend Trainee Developer</h6>
          <p>Enero 2020 - Agosto 2021</p>
          <div className="skills">
            <h6>Tecnologías</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
