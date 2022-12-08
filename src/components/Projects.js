import React from "react";
import Marquee from "react-fast-marquee";
import "../styles/Projects.css";

const Projects = () => {
  const arrayProjects = [
    {
      id: "01",
      img: "http://drive.google.com/uc?export=view&id=1ERrEY_uc_SSoNnfPfk1IWtevKfs4IwgZ",
      title: "Portfolio Profesional ",
      hashtags:
        "#HTML  #CSS  #Bootstrap  #JavaScript  #React  #ReactFastMarquee #MyPortfolio #Frame-motion #Netlify #npm #GIT #github #SweetAler2 #emailJS",
      miniatures: [
        "http://drive.google.com/uc?export=view&id=1M32jUtwGCGMiaBpKkJxd5Y8JdOFAe61V",
        "http://drive.google.com/uc?export=view&id=1DG1jCCPkVCHIzQkAu_9mnxhyEVDJeS3t",
        "http://drive.google.com/uc?export=view&id=1KBjzG7p1l5gLA0GtEN0SVRVUoDw61MYv",
        "http://drive.google.com/uc?export=view&id=1ItTU5QS9lDTovCX0DI_XGmMiiNTC95pZ",
      ],
      logoSites: [
        {
          web: "www.google.com",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV",
        },
        {
          web: "https://github.com/daniellfreelancer/portfolio-daniel-lugo",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W",
        },
        {
          web: "https://github.com/daniellfreelancer/portfolio-daniel-lugo",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1udc3kgvq3fM2usggvWygdgWpkwYd3nrW",
        },
      ],
    },
    {
      id: "02",
      img: "http://drive.google.com/uc?export=view&id=1Ibr4ZjfWy9_QOQGh_FGlLaLN-Z9ReXdI",
      title: "Punto Café - E-commerce",
      hashtags:
        "#HTML  #CSS  #Bootstrap  #JavaScript  #React  #ReactFastMarquee  #Mercadopago  #Node  #Express.js  #JWT  #MongoDB  #CORS  #AXIOS  #Redux  #Heroku  #GoogleApis",
      miniatures: [
        "http://drive.google.com/uc?export=view&id=15tijVQMxSaSl9UmMKseF4T9qxXzkmBQi",
        "http://drive.google.com/uc?export=view&id=1vCkS1rP-tYVCL5fJT--9GSxTKFvkNZU9",
        "http://drive.google.com/uc?export=view&id=1AOYeqmzU2aodnkdfR5tTZvr3M_r1nQ9y",
        "http://drive.google.com/uc?export=view&id=173u-aMuIM5OmhKoa0uysydKTPvkafyj8",
        "http://drive.google.com/uc?export=view&id=1UkfXTNXBmsHYbEY7uFW_G6-6Ad5bB486",
      ],
      logoSites: [
        {
          web: "https://dot-cafe-frontend.herokuapp.com/",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV",
        },
        {
          web: "https://github.com/daniellfreelancer/dot-cafe-front",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W",
        },
        {
          web: "https://github.com/daniellfreelancer/dot-cafe-front",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1bfRVR04bibDM8QuGdH-K7R6KdIFYLjE6",
        },
      ],
    },
    {
      id: "03",
      img: "http://drive.google.com/uc?export=view&id=1Fpx8nP5-PkVhpxhoL3QiRpFYONR5MUCz",
      title: "MyTinerary - Pulp Fiction Travel",
      hashtags:
        "#HTML  #CSS  #Bootstrap  #JavaScript  #React  #ReactFastMarquee  #Mercadopago  #Node  #Express.js  #JWT  #MongoDB  #.CaféBags  #Toastify  #CORS  #AXIOS  #Redux  #Heroku  #GoogleApis",
      miniatures: [
        "http://drive.google.com/uc?export=view&id=1oKhK8LRcO6RM6EVmh58ESDBhM_Vg9xqw",
        "http://drive.google.com/uc?export=view&id=1AEnREHfxZNKXVqBNHOD0I-R7FBiuLMN3",
        "http://drive.google.com/uc?export=view&id=1p5kQb0Y6neF5ARL7bIW8LoLfvgh14_Aq",
        "http://drive.google.com/uc?export=view&id=1VZ3B4wgOmfvJGxJiG6kPDLkVHpdgHSsc",
        "http://drive.google.com/uc?export=view&id=19vj0PHdjvNTdQQVOfhfRsVL40__O7eAc",
        "http://drive.google.com/uc?export=view&id=15ks-6F8XpVmD4UF0FfYWpL1nqFn6YBqo",
      ],
      logoSites: [
        {
          web: "https://pulp-fiction-oficial-front.herokuapp.com/",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV",
        },
        {
          web: "https://github.com/daniellfreelancer/mytinerary-pulpfiction",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W",
        },
        {
          web: "https://github.com/daniellfreelancer/mytinerary-pulpfiction",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1bfRVR04bibDM8QuGdH-K7R6KdIFYLjE6",
        },
      ],
    },
    {
      id: "04",
      img: "http://drive.google.com/uc?export=view&id=1xF-GyZjWHw_fUyy2h07KU9rk3T7fUNru",
      title: "Mindy Petshop - E-commerce ",
      hashtags:
        "#HTML  #CSS  #Bootstrap  #JavaScript  #React  #Marquee #Petshop  #SweetAlert  #AXIOS  #gitpages ",
      miniatures: [
        "http://drive.google.com/uc?export=view&id=1eDvDPdYCLQ1VqwF21-hHjBUixY658MYO",
        "http://drive.google.com/uc?export=view&id=1TCHzbUFZyuubkkOt_Q1oVGQalTq6jKb4",
        "http://drive.google.com/uc?export=view&id=1vY_5RREDLRdvyoOs_JcolfAa_mk-0X_R",
        "http://drive.google.com/uc?export=view&id=1vSP62-2FBN97v9d9KBxBAiWaI5PptDoB",
        "http://drive.google.com/uc?export=view&id=1oHKCSkbN2D7pc5DiKNb1sjSkui8QgSGZ",
        "http://drive.google.com/uc?export=view&id=15esdb0qIdS2veo7iZFm-1bs0-zpBphDo",
      ],
      logoSites: [
        {
          web: "https://daniellfreelancer.github.io/mindy-grupo1/",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV",
        },
        {
          web: "https://github.com/daniellfreelancer/mindy-grupo1",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W",
        },
        {
          web: "https://github.com/daniellfreelancer/mindy-grupo1",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1bfRVR04bibDM8QuGdH-K7R6KdIFYLjE6",
        },
      ],
    },
    {
      id: "05",
      img: "http://drive.google.com/uc?export=view&id=1uJHIDp4SgB5MggaI1OWZziRe4DUyYRiM",
      title: "MS Store- E-commerce ",
      hashtags:
        "#HTML  #CSS  #Bootstrap  #JavaScript  #React  #Firebase #AXIOS #CarContext  #Vercel.app  #GoogleFirebase",
      miniatures: [
        "http://drive.google.com/uc?export=view&id=1uJHIDp4SgB5MggaI1OWZziRe4DUyYRiM",
        "http://drive.google.com/uc?export=view&id=1WejGbMS7Wu0wzfI0mfJU1LmXANijULST",
        "http://drive.google.com/uc?export=view&id=1bFXxXXFUCVo1rkKIu8uUsLJSHQUT7L6e",
        "http://drive.google.com/uc?export=view&id=19JtPL8JUZfY7P8JyOgZdQ0HMGCu0quaL",
        "http://drive.google.com/uc?export=view&id=1RNoprRg4x5TsLgcZEgj7-RAP_xpqp2zu",
        "http://drive.google.com/uc?export=view&id=12ymsIkjWFKc1HqT03BswsrdVe1wR9sOd",
        "http://drive.google.com/uc?export=view&id=1-N7a30nNlANEe_lc6Fk4r2cC5onoDEJQ",
      ],
      logoSites: [
        {
          web: "https://proyecto-final-react-js-daniel-lugo-mstore.vercel.app/",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV",
        },
        {
          web: "https://github.com/daniellfreelancer/proyectoFinalReactJsDanielLugoMstore",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W",
        },
        {
          web: "https://github.com/daniellfreelancer/proyectoFinalReactJsDanielLugoMstore",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1udc3kgvq3fM2usggvWygdgWpkwYd3nrW",
        },
      ],
    },
    {
      id: "06",
      img: "http://drive.google.com/uc?export=view&id=1mfXCEEKtMum-Dd7vljQwKG04ErCWGcIQ",
      title: "Amazing Events - Events Blog",
      hashtags:
        "#HTML  #CSS  #Bootstrap  #JavaScript  #gitPages #AXIOS #Glassmorphism  ",
      miniatures: [
        "http://drive.google.com/uc?export=view&id=1mfXCEEKtMum-Dd7vljQwKG04ErCWGcIQ",
        "http://drive.google.com/uc?export=view&id=1D8anUTd6FtsLhLNlq9ukbdy2SsTYhSUp",
        "http://drive.google.com/uc?export=view&id=1zndNrsyXBu4_WmjXfi0M_IwFBI-Zs_aF",
        "http://drive.google.com/uc?export=view&id=12ZD2Dt1BdVYYPG9ydpK9rNLzJfxS4HlM",
        "http://drive.google.com/uc?export=view&id=1Hhhc7uWm3EJYDuaQXzxfAtJvABAAOoy_",
        "http://drive.google.com/uc?export=view&id=1EIO8cVKQJ1sKj5H0ZYjxW_9txyKbjguF",
        "http://drive.google.com/uc?export=view&id=1A_fKAIOYuEBobTH9JR_4eKegLgTm-4xi",
      ],
      logoSites: [
        {
          web: "https://daniellfreelancer.github.io/amazing-events/index.html",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV",
        },
        {
          web: "https://github.com/daniellfreelancer/amazing-events",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W",
        },
        {
          web: "https://github.com/daniellfreelancer/amazing-events",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1udc3kgvq3fM2usggvWygdgWpkwYd3nrW",
        },
      ],
    },
    {
      id: "07",
      img: "http://drive.google.com/uc?export=view&id=14V75HNeRvfTZh3rhGM20wlkTBBJL5hUk",
      title: "Sofia Cocina - Food Blog",
      hashtags:
        "#HTML  #CSS  #Bootstrap  #JavaScript  #MetaMask  #WEB3 #shop #FoodRecipe #Jquery #SASS #API #moralis ",
      miniatures: [
        "http://drive.google.com/uc?export=view&id=12K8EkqG1bQpmnKxUyB52Ey-dNOWTGlY3",
        "http://drive.google.com/uc?export=view&id=10bdOpA1l7XkK24ahrdSBlE0VUbqmVD6C",
        "http://drive.google.com/uc?export=view&id=14EWozy7YQXvRtYOaEpbzndvgx1T_sJLg",
        "http://drive.google.com/uc?export=view&id=1tsA1CJemqijItxj5Qa9z_klKFrPpEU21",
        "http://drive.google.com/uc?export=view&id=11aR5c2drK2cp6a9t_E6JQfYRbUA0Ba_D",
        "http://drive.google.com/uc?export=view&id=1cTBabtPG9AENNUWtsxMclH4VGF-HkMEL",
      ],
      logoSites: [
        {
          web: "https://daniellfreelancer.github.io/entregaFinalJs/index.html",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV",
        },
        {
          web: "https://github.com/daniellfreelancer/entregaFinalJs",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W",
        },
        {
          web: "https://github.com/daniellfreelancer/entregaFinalJs",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1udc3kgvq3fM2usggvWygdgWpkwYd3nrW",
        },
      ],
    },
    {
      id: "08",
      img: "http://drive.google.com/uc?export=view&id=1Sbxv6W_rEItwSkpZsGi_dqwecv93orlm",
      title: "Thug Turtle- Web3 page",
      hashtags:
        "#HTML  #CSS  #Bootstrap  #JavaScript  #MetaMask  #WEB3  #NFT #Staking #Jquery #SASS ",
      miniatures: [
        "http://drive.google.com/uc?export=view&id=1-bTDA5CKNJ15K8jElKnMRtHHDGTXSyXY",
        "http://drive.google.com/uc?export=view&id=1KfemzzcQIu_au-WW_ZRbxg4r8UkzJIsn",
        "http://drive.google.com/uc?export=view&id=1_eZtdd19wu117Byg3Q5fJ-68W3RFwe7t",
        "http://drive.google.com/uc?export=view&id=1G366FWGDqRocJ0GUxVJWxAlVJ6NUQmhL",
        "http://drive.google.com/uc?export=view&id=1-ajbR1TDm9YJMrQAizHEEgDMdioqR5O9",
      ],
      logoSites: [
        {
          web: "https://daniellfreelancer.github.io/ThugTurtleNFT/",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV",
        },
        {
          web: "https://github.com/daniellfreelancer/ThugTurtleNFT",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W",
        },
        {
          web: "https://github.com/daniellfreelancer/ThugTurtleNFT",
          logoWeb:
            "http://drive.google.com/uc?export=view&id=1udc3kgvq3fM2usggvWygdgWpkwYd3nrW",
        },
      ],
    },
  ];

  const handleImg = (id) => {
    let imgSelected = id;

    console.log(imgSelected);
  };

  return (
    <>
      {arrayProjects.map((p) => {
        return (
          <div className="div-card-project m-3" key={p.id}>
            <img src={p.img} alt="project" />
            <div className="d-flex flex-column align-items-center">
              <h3 className="pt-2">{p.title}</h3>
              <div className=" px-2 div-hashtag d-flex flex-wrap justify-content-center align-items-center gap-3">
                <p className="hashtag-project">{p.hashtags}</p>
              </div>
              <div className=" pt-5 d-flex justify-content-center gap-5">
                {p.logoSites.map((i) => (
                  <a href={i.web} target="blank">
                    <img className="link-site" src={i.logoWeb} alt="icon" />
                  </a>
                ))}
              </div>
              <Marquee
                className="marquee-div w-100 py-4"
                gradient={false}
                speed={15}
                direction={"right"}
              >
                {p.miniatures.map((i) => (
                  <img
                    onClick={() => handleImg(i)}
                    className="mini-img-project"
                    src={i}
                    alt={i}
                  />
                ))}
              </Marquee>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
