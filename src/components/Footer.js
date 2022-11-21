import React from 'react'
import '../styles/Footer.css'

import myCV from '../assets/DanielLugoFullStack.pdf'

export default function Footer() {
    return (
        <div className='footer-div'>

            <a href={myCV} download="Daniel-Lugo-FullStack-CV">
                <img className="link-footer" src='http://drive.google.com/uc?export=view&id=1uuhFohETxC9mRNhXxlVwPTPy4QNd6IGj' alt='cv' />
            </a>
            <a href="https://github.com/daniellfreelancer" target="_blank">
                <img className="link-footer" src='http://drive.google.com/uc?export=view&id=1KpFtZ0xmYHCKc-Wj-7Mbfshj5RaKMNvI' alt='github' />
            </a>
            <a href="https://www.linkedin.com/in/daniel-lugo-roberty/" target="_blank">
                <img className="link-footer" src='http://drive.google.com/uc?export=view&id=1na_cYe-RLcaZ2KM7mYpxjuxzmd2neDrl' alt='linkedin' />
            </a>

        </div>
    )
}
