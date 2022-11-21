import React from "react";
import '../styles/Scroll.css'

export default function ScrollToTop() {


  return (
    <>
      <p className="ir-arriba" >
        <span className="fa-stack">
          <i className="fa fa-circle fa-stack-2x">Arriba</i>
          <i className="fa fa-arrow-up fa-stack-1x fa-inverse"></i>
        </span>
      </p>
    </>
  );
}
