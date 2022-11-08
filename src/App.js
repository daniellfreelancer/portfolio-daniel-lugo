import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Marquee from 'react-fast-marquee';

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
          <a className="navbar-brand" href="#">Proyectos</a>
          <a className="navbar-brand" href="#">Contacto</a>
        </div>
      </nav>
      <header className="App-header">

        <div className='absolute'>

        </div>
        <video id='video' loop autoPlay muted>
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
        <div id="about" className='container-fluid div-title'>
          <h2>Sobre mi</h2>
        </div>
        <div className='container'>
          <div className='div-about-me' >
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
        <div id="about" className='container-fluid div-title'>
          <h2>Experiencia</h2>
        </div>
        <div className='container gap-5 py-5 div-experiencia'>
          <div class="card-container">
            <span class="pro">Actual</span>
            <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
            <h3>Fundación Retorno a la Libertad</h3>
            <h6>Fullstack Developer</h6>
            <p>Septiembre 2022</p>
            <div class="buttons">
              <p>Levantamiento de informacion, creacion de mockup</p>
            </div>
            <div class="skills">
              <h6>Tecnologías</h6>
              <ul>
                <li>React</li>
                <li>bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div class="card-container">
            <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
            <h3>Fundación Retorno a la Libertad</h3>
            <h6>Fullstack Developer</h6>
            <p>Septiembre 2022</p>
            <div class="buttons">
              <p>Levantamiento de informacion, creacion de mockup</p>
            </div>
            <div class="skills">
              <h6>Tecnologías</h6>
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
          </div>
          <div class="card-container">
            <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
            <h3>Fundación Retorno a la Libertad</h3>
            <h6>Fullstack Developer</h6>
            <p>Septiembre 2022</p>
            <div class="buttons">
              <p>Levantamiento de informacion, creacion de mockup</p>
            </div>
            <div class="skills">
              <h6>Tecnologías</h6>
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="about" className='container-fluid div-title'>
          <h2>Habilidades</h2>
        </div>

        <div id="about" className='container-fluid div-title'>
          <h2>Certificaciones</h2>
        </div>
        <div className='container div-certification'>
          <img src='http://drive.google.com/uc?export=view&id=1shkX68Xyig1SzvSFDsS7ivzVmiRE7MYE' alt='mindhub' className='img-certification' />
          <img src='http://drive.google.com/uc?export=view&id=1-PmhneMNAemG3Z8_wxFBHuCk-okf8d0f' alt='coderhouse' className='img-certification' />
          <img src='http://drive.google.com/uc?export=view&id=1Cch6F6Jq8sGowN9g8wqXcgH_zsQ8gha5' alt='certiprof' className='img-certification' />
          <img src='http://drive.google.com/uc?export=view&id=1sti6Xv7a245r_W9tH4fOKcJtUewkkSV2' alt='certiprof' className='img-certification' />

        </div>






      </main>
    </div>
  );
}

export default App;
