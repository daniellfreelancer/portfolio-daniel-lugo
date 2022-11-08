import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Marquee from 'react-fast-marquee';
import Projects from './components/Projects';

function App() {

  let arraySponsors = [
    {
      id: "01",
      img: "http://drive.google.com/uc?export=view&id=1KpN-n-4TfhEzJb_eXo9i-ngON_OC8W_e"
    },
    {
      id: "02",
      img: "http://drive.google.com/uc?export=view&id=1g6c1Z00S4UQHW_ipbAoVrdqKrsPqRcOG"
    },
    {
      id: "03",
      img: "http://drive.google.com/uc?export=view&id=1Q_CjPkorpW0vIMmwV6uWwUh1mXa32dcK"
    },
    {
      id: "04",
      img: "http://drive.google.com/uc?export=view&id=1ZjDthzWM_-TUGW09-wvU3Xnn6N1PUpfF"
    },
    {
      id: "05",
      img: "http://drive.google.com/uc?export=view&id=1nYS21rdiLS1P54qhbaySmmiYCUqSOKRd"
    },
    {
      id: "06",
      img: "http://drive.google.com/uc?export=view&id=1jcc8I2XZznjQft5pb_aSUPbrfWh7DTVj"
    },
    {
      id: "07",
      img: "http://drive.google.com/uc?export=view&id=1uOKJ-HyUB4dkTkIjFXgQHsLlc6nhoXxg"
    },
    {
      id: "08",
      img: "http://drive.google.com/uc?export=view&id=1DjH_1WE-hdRCBgimFaUID7fvAL9qaqx6"
    },
    {
      id: "09",
      img: "http://drive.google.com/uc?export=view&id=1LbpBqL5o0jcHuPePwXlDC8O1ST0geOav"
    },
    {
      id: "10",
      img: "http://drive.google.com/uc?export=view&id=1w5KeNjmlGwenFRcz1Wcfb7SHfjWlfPFW"
    },
    {
      id: "11",
      img: "http://drive.google.com/uc?export=view&id=14_iuQ9Lb5r3rWqwIW01mZJnwyRidOjNn"
    },
    {
      id: "12",
      img: "http://drive.google.com/uc?export=view&id=1vFWCtyEhEegSJuhjVYYkO5qsXeqLAqVN"
    },
    {
      id: "13",
      img: "http://drive.google.com/uc?export=view&id=1KNLCP0XX_JJrw3-DTk-RQZzE2cn1cEEi"
    },
    {
      id: "14",
      img: "http://drive.google.com/uc?export=view&id=1Ard-55P9ibnANv-Uibke3Slwnsg4u33r"
    },
    {
      id: "15",
      img: "http://drive.google.com/uc?export=view&id=1RjLwNxWwpCxkdzyyIYWIWyDY_fnrB7yo"
    },
    {
      id: "16",
      img: "http://drive.google.com/uc?export=view&id=1sXUCL0FB6XzjN8_ci16H6S8W4VtaECoC"
    },
    {
      id: "17",
      img: "http://drive.google.com/uc?export=view&id=1HGDNoeHnTVle4Mmu1IQNLMJin42sD_86"
    }
  ]




  return (
    <div className="App">
      <nav className="navbar pt-3">
        <div className="container d-flex justify-content-center gap-5 div-nav  ">
          <a className="navbar-brand" href="#about">Sobre mi</a>
          <a className="navbar-brand" href="#">Capacitación</a>
          <a className="navbar-brand" href="#projects">Proyectos</a>
          <a className="navbar-brand" href="#">Contacto</a>
        </div>
      </nav>
      <header className="App-header">

        <div className='absolute'>

        </div>
        <video id='video' loop autoPlay muted infinite preload='true'>
          <source src="http://drive.google.com/uc?export=view&id=1wymZxf9AUTcODYL6kxos_FpknKlMNBD8" type="video/mp4" />
        </video>




        <div className='div-hero' >
          <img className='logo-web' src="http://drive.google.com/uc?export=view&id=1liFvbQZORH2kRaGLkadWscHOIb6ukPLj" alt='logo' />
        </div>
      </header>
      <Marquee className="marquee-div w-100 gap-5 pb-5 mb-5" gradient={false} speed={30} >
        {
          arraySponsors.map((sponsor) => {
            return (
              <img className="img-sponsor mx-5" src={sponsor.img} key={sponsor.id} alt={sponsor.id} />
            )
          })
        }
      </Marquee>
      <main>

        <div className='container d-flex justify-content-between lg-col-2 flex-wrap'>
          <div>
            <img src="http://drive.google.com/uc?export=view&id=1zMZliJOjk7yUVdRE_2uEmP9FR0-WindT" alt="aboutme" className='img-about' />
          </div>
          <div className='div-about-me' id='about' >
            <h2>Sobre mi</h2>

            <p>Soy Desarrollador Full Stack MERN. Tengo experiencia en el
              manejo de diferentes tecnologías, MongoDB, Express,
              JavaScript, React.js, las cuales incrementé en mi última
              capacitación en un Bootcamp Full Stack de más 700 hrs de
              práctica, así como el manejo de metodologías ágiles. He
              trabajado como desarrollador web Front-End en diferentes
              proyectos, soy una persona que se adapta muy fácilmente al
              entorno de trabajo remoto, proactivo y presente en la
              creatividad de los proyectos que me son asignados. El
              trabajo en equipo, la organización y la planificación son mi
              principal aporte para alcanzar los objetivos en cada proyecto
              que he participado. Actualmente trabajo día a día en seguir
              creciendo en el ámbito profesional IT y desarrollo personal.
              Mi objetivo es formar parte de una empresa donde pueda
              brindar mis conocimientos para el logro de objetivos de
              cada proyecto y que, a su vez, me permita adquirir nuevas
              habilidades y seguir superándome.</p>
          </div>
        </div>

        <div>
          <hr className='divider' />
        </div>
        <div className='div-separetor'>
          <h2>Experiencia</h2>
        </div>

        <div className='container gap-5 py-5 div-experiencia'>
          <div className="card-container">
            <span className="pro">Actual</span>
            <img className="round w-50 img-experience" src="http://drive.google.com/uc?export=view&id=1wb0YX9ZUc99HQbZdniGFVAJMKySAc6xJ" alt="user" />
            <h3>Fundación Retorno a la Libertad</h3>
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
          <div class="card-container">
            <img class="round w-50" src="http://drive.google.com/uc?export=view&id=1O5F-nGBnSW7Ks9jLJxp4L3x9IajhA1cP" alt="user" />
            <h3>Bootcamp Fullstack MERN & Mobile</h3>
            <h6>Fullstack Developer</h6>
            <p>Julio 2022 - Octubre 2022</p>
            <div class="skills">
              <h6>Tecnologías</h6>
              <ul >
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
          <div class="card-container">
            <img class="round w-50" src="http://drive.google.com/uc?export=view&id=1jnMTJq62MDFkd8utBSFMg352tu0fr10Z" alt="user" />
            <h3>Sociedad Médica de Urología de Venezuela</h3>
            <h6>Frontend Trainee Developer</h6>
            <p>Enero 2020 - Agosto 2021</p>
            <div class="skills">
              <h6>Tecnologías</h6>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JQuery</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <hr className='divider' />
        </div>
        <div className='div-separetor'>
          <h2>Certificaciones</h2>
        </div>

        <div className='container div-certification'>
          <img src='http://drive.google.com/uc?export=view&id=1shkX68Xyig1SzvSFDsS7ivzVmiRE7MYE' alt='mindhub' className='img-certification' />
          <img src='http://drive.google.com/uc?export=view&id=1-PmhneMNAemG3Z8_wxFBHuCk-okf8d0f' alt='coderhouse' className='img-certification' />
          <img src='http://drive.google.com/uc?export=view&id=1Cch6F6Jq8sGowN9g8wqXcgH_zsQ8gha5' alt='certiprof' className='img-certification' />
          <img src='http://drive.google.com/uc?export=view&id=1sti6Xv7a245r_W9tH4fOKcJtUewkkSV2' alt='certiprof' className='img-certification' />

        </div>

        <div>
          <hr className='divider' />
        </div>
        <div className='div-separetor'>
          <h2>Capacitación</h2>
        </div>
        <div className='div-container-education'>


          <div class="container flex-wrap">

            <div class="card-edu">
              <div class="face face1">
                <div class="content">
                  <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                  <h3>FrontEnd Developer React</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <h3> (Ago-2021 / May 2022)</h3>
                  <p>Carrera de desarrollador front-end con enfoque a React.js
                    para desarrollo de Single Page Aplication, utilizando HTML, CSS,
                    SASS, Jquery, Javascript, Bootstrap, Firebase, Git & GitHub, Fetch .
                  </p>
                </div>
              </div>
            </div>
            <div class="card-edu">
              <div class="face face1">
                <div class="content">
                  <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                  <h3>FullStack Developer MERN & Mobile</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <h3>(Jul-2022 / Oct 2022</h3>
                  <p>Bootcamp con +700 Horas full-time utilizando metodologías
                    ágiles (SCRUM), simulando un ambiente de trabajo real
                    utilizando tecnologías como MongoDB, Express, React.js,
                    Node.js, React Native, Heroku, Git & GitHub, GitHub Project,
                    Axios, Redux.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <hr className='divider' />
        </div>
        {/* Area Proyectos */}
        <div className='div-separetor' id='projects'>
          <h2>Proyectos</h2>
        </div>

        <div className='container d-flex justify-content-center py-5 flex-wrap gap-5'>
        <Projects/>
        </div>





      </main>
    </div>
  );
}

export default App;
