import React from 'react'
import Marquee from 'react-fast-marquee'
import '../styles/Tech.css'

export default function Tech() {
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
    <Marquee className="marquee-div marquee-tech w-100 gap-5 pb-5 mb-5" gradient={false} speed={30} >
    {
      arraySponsors.map((sponsor) => {
        return (
          <img className="img-sponsor mx-5" src={sponsor.img} key={sponsor.id} alt={sponsor.id} />
        )
      })
    }
  </Marquee>
  )
}
