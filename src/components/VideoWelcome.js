import React from 'react'
import '../styles/Header.css'

export default function VideoWelcome() {
  return (
    <header className="App-header div-header">
    <div className='absolute'>
    </div>
    <video id='video' src="http://drive.google.com/uc?export=view&id=1wymZxf9AUTcODYL6kxos_FpknKlMNBD8" loop autoPlay muted infinite="true" />


    <div className='div-hero' >
      <img className='logo-web' src="http://drive.google.com/uc?export=view&id=1liFvbQZORH2kRaGLkadWscHOIb6ukPLj" alt='logo' />
    </div>
  </header>
  )
}
