import React from "react";
import "../styles/Certi.css";
export default function Certifieds() {
  return (
    <>
      <div>
        <hr className="divider" />
      </div>
      <div className="div-separetor" id="training">
        <h2>Certificaciones</h2>
      </div>

      <div className="div-certification">
        <img
          src="http://drive.google.com/uc?export=view&id=1shkX68Xyig1SzvSFDsS7ivzVmiRE7MYE"
          alt="mindhub"
          className="img-certification"
        />
        <img
          src="http://drive.google.com/uc?export=view&id=1-PmhneMNAemG3Z8_wxFBHuCk-okf8d0f"
          alt="coderhouse"
          className="img-certification-box"
        />
        <img
          src="http://drive.google.com/uc?export=view&id=1Cch6F6Jq8sGowN9g8wqXcgH_zsQ8gha5"
          alt="certiprof"
          className="img-certification"
        />
        <img
          src="http://drive.google.com/uc?export=view&id=1sti6Xv7a245r_W9tH4fOKcJtUewkkSV2"
          alt="certiprof"
          className="img-certification"
        />
      </div>
    </>
  );
}
