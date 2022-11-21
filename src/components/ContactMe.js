import React from "react";

export default function ContactMe() {
  return (
    <>
      <div>
        <hr className="divider" />
      </div>
      <div className="div-separetor" id="contactMe">
        <h2>Contáctame</h2>
      </div>

      <div className="d-flex justify-content-center gap-5 ">
        <div className="card-form">
          <form>
            <div className="md-3">
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
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
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
