import React from "react";
import "../styles/Mobile.css";
import { motion } from "framer-motion";

export default function Mobile() {
  //     http://drive.google.com/uc?export=view&id=1JnAV_0KMYDk1Tf96GdUgUV2QzdGZDuhh
  // http://drive.google.com/uc?export=view&id=1Yk9EKK2Iqrdnm5s_PxV0kdR1iZ7rmnNp
  // http://drive.google.com/uc?export=view&id=1oVxtzD4kNIIlP8aebIpzf7WPc7nEbPsE
  // http://drive.google.com/uc?export=view&id=1x59WCtA-PsbCNaMGwcKnK-N15topsueL
  // http://drive.google.com/uc?export=view&id=1U3MD-Zj_AExjGj2ZP5UPE1miQrIwYyQT
  // http://drive.google.com/uc?export=view&id=1R9SGpM7Jd02iu250cdd0xKWC8c0j3Mqx
  // http://drive.google.com/uc?export=view&id=1u_v7e3ZrbpTsPTrsgyHN2-tOBVa-pMoh

  const arrayPuntoCafe = [
    "http://drive.google.com/uc?export=view&id=1q38mWBEzie7raJFtF31UbImdBNTLgL3g",
    "http://drive.google.com/uc?export=view&id=1JnAV_0KMYDk1Tf96GdUgUV2QzdGZDuhh",
    "http://drive.google.com/uc?export=view&id=1Yk9EKK2Iqrdnm5s_PxV0kdR1iZ7rmnNp",
    "http://drive.google.com/uc?export=view&id=1oVxtzD4kNIIlP8aebIpzf7WPc7nEbPsE",
    "http://drive.google.com/uc?export=view&id=1x59WCtA-PsbCNaMGwcKnK-N15topsueL",
    "http://drive.google.com/uc?export=view&id=1U3MD-Zj_AExjGj2ZP5UPE1miQrIwYyQT",
    "http://drive.google.com/uc?export=view&id=1R9SGpM7Jd02iu250cdd0xKWC8c0j3Mqx",
    "http://drive.google.com/uc?export=view&id=1u_v7e3ZrbpTsPTrsgyHN2-tOBVa-pMoh",
  ];


  return (
    <>
      <div>
        <hr className="divider" />
      </div>
      <div className="div-separetor py-5">
        <h2>Proyectos Mobile</h2>
      </div>

<div className="container-slider-div d-flex justify-content-center gap-5 flex-wrap" >

      <div className="div-body">
            
      <div className="div-text-mobile p-3 ">
        <h2 className="" >Punto Café - Mobile</h2>
        <div className=" px-2 div-hashtag d-flex flex-wrap justify-content-center align-items-center gap-3">
        <p className="hashtag-project"> #ReactNative #Expo-Cli #Android #React-Native-Async-Storage #Drawer #Redux #Gesture-handler #Reanimated</p>
              </div>
      </div>
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -3300 }}
          >
            {arrayPuntoCafe.map((item) => {
              return (
                <motion.div className="item">
                  <img className="img-mobile" src={item} alt={item} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      
      <div className="div-body">
            
            <div className="div-text-mobile p-3">
              <h2 className="" >Pulp Fiction - Mobile</h2>
              <div className=" px-2 div-hashtag d-flex flex-wrap justify-content-center align-items-center gap-3">
                <p className="hashtag-project"> #ReactNative #Expo-Cli #Android #React-Native-Async-Storage #Drawer #Redux #Gesture-handler #Reanimated</p>
              </div>
            </div>
              <motion.div className="slider-container">
                <motion.div
                  className="slider"
                  drag="x"
                  dragConstraints={{ right: 0, left: -3300 }}
                >
                  {arrayPuntoCafe.map((item) => {
                    return (
                      <motion.div className="item">
                        <img className="img-mobile" src={item} alt={item} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
      </div>
</div>


    </>
  );
}
