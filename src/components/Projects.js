import React from 'react';
import Marquee from 'react-fast-marquee';

const Projects = () => {

    const arrayProjects = [
        {
            id: "01",
            img: "http://drive.google.com/uc?export=view&id=1ERrEY_uc_SSoNnfPfk1IWtevKfs4IwgZ",
            title: "Portfolio Profesional",
            hashtags: '#HTML  #CSS  #Bootstrap  #JavaScript  #React  #ReactFastMarquee',
            miniatures: ["http://drive.google.com/uc?export=view&id=1M32jUtwGCGMiaBpKkJxd5Y8JdOFAe61V", "http://drive.google.com/uc?export=view&id=1DG1jCCPkVCHIzQkAu_9mnxhyEVDJeS3t", "http://drive.google.com/uc?export=view&id=1KBjzG7p1l5gLA0GtEN0SVRVUoDw61MYv", "http://drive.google.com/uc?export=view&id=1ItTU5QS9lDTovCX0DI_XGmMiiNTC95pZ"],
            logoSites: [{
                web: "www.google.com",
                logoWeb: "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV"
            }, {
                web: "https://github.com/daniellfreelancer/portfolio-daniel-lugo",
                logoWeb: "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W"
            }
            ]

        },
        {
            id: "02",
            img: "http://drive.google.com/uc?export=view&id=1bJX5pZsojWW62DLbpr8RgjDg66DX5_KF",
            title: "Punto Café - E-commerce",
            hashtags: '#HTML  #CSS  #Bootstrap  #JavaScript  #React  #ReactFastMarquee  #Mercadopago  #Node  #Express.js  #JWT  #MongoDB  #.CaféBags  #Toastify   "#CORS  #AXIOS  #Redux  #Heroku  #GoogleApis',
            miniatures: ["http://drive.google.com/uc?export=view&id=15tijVQMxSaSl9UmMKseF4T9qxXzkmBQi", "http://drive.google.com/uc?export=view&id=1vCkS1rP-tYVCL5fJT--9GSxTKFvkNZU9", "http://drive.google.com/uc?export=view&id=1AOYeqmzU2aodnkdfR5tTZvr3M_r1nQ9y", "http://drive.google.com/uc?export=view&id=173u-aMuIM5OmhKoa0uysydKTPvkafyj8", "http://drive.google.com/uc?export=view&id=1UkfXTNXBmsHYbEY7uFW_G6-6Ad5bB486"],
            logoSites: [{
                web: "https://dot-cafe-frontend.herokuapp.com/",
                logoWeb: "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV"
            }, {
                web: "https://github.com/daniellfreelancer/dot-cafe-front",
                logoWeb: "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W"
            }
            ]

        },
        {
            id: "03",
            img: "http://drive.google.com/uc?export=view&id=1Fpx8nP5-PkVhpxhoL3QiRpFYONR5MUCz",
            title: "MyTinerary - Pulp Fiction Travel",
            hashtags: '#HTML  #CSS  #Bootstrap  #JavaScript  #React  #ReactFastMarquee  #Mercadopago  #Node  #Express.js  #JWT  #MongoDB  #.CaféBags  #Toastify  #CORS  #AXIOS  #Redux  #Heroku  #GoogleApis',
            miniatures: ["http://drive.google.com/uc?export=view&id=1oKhK8LRcO6RM6EVmh58ESDBhM_Vg9xqw", "http://drive.google.com/uc?export=view&id=1AEnREHfxZNKXVqBNHOD0I-R7FBiuLMN3","http://drive.google.com/uc?export=view&id=1p5kQb0Y6neF5ARL7bIW8LoLfvgh14_Aq", "http://drive.google.com/uc?export=view&id=1VZ3B4wgOmfvJGxJiG6kPDLkVHpdgHSsc", "http://drive.google.com/uc?export=view&id=19vj0PHdjvNTdQQVOfhfRsVL40__O7eAc", "http://drive.google.com/uc?export=view&id=15ks-6F8XpVmD4UF0FfYWpL1nqFn6YBqo"],
            logoSites: [{
                web: "https://pulp-fiction-oficial-front.herokuapp.com/",
                logoWeb: "http://drive.google.com/uc?export=view&id=1jFULOx6yj7djczgWYR47noLo_wFFy1xV"
            }, {
                web: "https://github.com/daniellfreelancer/mytinerary-pulpfiction",
                logoWeb: "http://drive.google.com/uc?export=view&id=1ifn__kKOOFR8SUyxOFlsirhra7MRyS8W"
            }
            ]

        }
    ]


    return (
        <>
            {
                arrayProjects.map((p) => {
                    return (
                        <div className='div-card-project m-3' >
                            <img src={p.img} alt='project' />
                            <div className='d-flex flex-column align-items-center'>
                                <h3 className='pt-2' >{p.title}</h3>
                                <div className=' px-2 div-hashtag d-flex flex-wrap justify-content-center align-items-center gap-3'>

                                        <p className='hashtag-project'>{p.hashtags}</p>

                                </div>
                                <div className='d-flex justify-content-center gap-5'>
                                    {
                                        p.logoSites.map((i) => <a href={i.web} target="blank" ><img className='link-site' src={i.logoWeb} alt='icon' /></a>)
                                    }
                                </div>
                                <Marquee className="marquee-div w-100" gradient={false} speed={15} direction={'right'} >
                                    {
                                        p.miniatures.map((i) => <img className='mini-img-project' src={i} alt={i} />)
                                    }
                                </Marquee>

                            </div>

                        </div>
                    )
                })
            }

        </>
    );
}

export default Projects;
