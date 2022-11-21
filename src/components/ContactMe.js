import React from "react";
import '../styles/Contactme.css'
export default function ContactMe() {
  return (
    <>
      <div>
        <hr className="divider" />
      </div>
      <div className="div-separetor" id="contactMe">
        <h2>Contáctame</h2>
      </div>

      <div className="d-flex justify-content-around p-5 gap-5 flex-wrap-reverse align-items-center ">
        <div className="card-form">
          <form className="">
            <div className="md-3 div-field">
              <label for="exampleInputEmail1" class="form-label">
                Nombre
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 div-field">
              <label for="exampleFormControlInput1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3 div-field">
              <label for="exampleFormControlTextarea1" class="form-label">
                Asunto
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-warning btn-enviar">
              Enviar!
            </button>
          </form>
        </div>
        <div>
          <a
            href="https://wa.me/56937255547?text=Hola%20Dani!%20acabo%20de%20ver%20tu%20portfolio%20me%20gustaria%20ponerme%20en%20contacto%20contigo!!!"
            target="blank"
          >
            <img
              src="http://drive.google.com/uc?export=view&id=1wGn660hqKM1c9QceGfRKa7mpLPWEImG3"
              alt="whatsappme"
              className="img-whatsapp"
            />
          </a>
        </div>
      </div>
    </>
  );
}
