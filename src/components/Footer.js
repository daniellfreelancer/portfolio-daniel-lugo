import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <div>
        <hr className="divider" />
      </div>
      <div className="footer-div">
        <a
          href="http://drive.google.com/uc?export=view&id=1eRjG9zSzfqzohOdbP75AoVqQOc5mpTwR"
          target="_blank"
          download="Daniel-Lugo-FullStack-CV"
          rel="noreferrer"
        >
          <img
            className="link-footer"
            src="http://drive.google.com/uc?export=view&id=1uuhFohETxC9mRNhXxlVwPTPy4QNd6IGj"
            alt="cv logo"
          />
        </a>
        <a
          href="https://github.com/daniellfreelancer"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="link-footer"
            src="http://drive.google.com/uc?export=view&id=1KpFtZ0xmYHCKc-Wj-7Mbfshj5RaKMNvI"
            alt="github logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-lugo-roberty/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="link-footer"
            src="http://drive.google.com/uc?export=view&id=1na_cYe-RLcaZ2KM7mYpxjuxzmd2neDrl"
            alt="linkedin logo"
          />
        </a>
      </div>
    </>
  );
}
