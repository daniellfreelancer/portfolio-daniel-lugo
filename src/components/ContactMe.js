import React from "react";
import '../styles/Contactme.css'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
export default function ContactMe() {

  const sentEmailTo =(e)=>{
    e.preventDefault();
    emailjs.sendForm("service_kx6adsn","template_vzrkx84",e.target,'ng_Wj0ukxU_sDzcdd').then((res)=>{
      Swal.fire({
        text: 'Su mensaje ha sido enviado con exito!',
        icon: 'success',
        confirmButtonText: 'Nice'
      })
      e.target.reset()
    } ).catch((error)=>console.log(error))
  

  }

  return (
    <>
      <div>
        <hr className="divider" />
      </div>
      <div className="div-separetor" id="contactMe">
        <h2>Contáctame</h2>
      </div>

      <div className="d-flex justify-content-evenly p-5 gap-5 flex-wrap-reverse align-items-center container ">
        <div className="card-form">
          <form onSubmit={sentEmailTo} className="">

            <div className="md-3 div-field">
              <label forHtml="to_name" class="form-label">
                
                Nombre
              </label>

              <input type="text" name="to_name" id="to_name" className="form-control"/>
            </div>
            <div className="mb-3 div-field">
              <label forHtml="reply_to" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="reply_to" 
                id="reply_to"
              />
            </div>
            <div class="mb-3 div-field">
              <label forHtml="message" className="form-label">
                Asunto
              </label>
              <textarea
                className="form-control"
                type="text" 
                name="message" 
                id="message"
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
