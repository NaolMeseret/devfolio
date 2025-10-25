// src/components/Footer.js
import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-container">
      <div className="home-sci">
        <a
          href="https://web.facebook.com/samiy11m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="https://x.com/NaolMeseret"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/naol-meseret-8300232b7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/NaolMeseret"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
      </div>

      <div className="footer-trace">
        <svg
          width="100%"
          height="100px"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="trace-path"
            d="M0,50 L100,50 C150,50 150,100 200,100 L400,100 C450,100 450,50 500,50 L700,50 C750,50 750,100 800,100 L1000,100 C1050,100 1050,50 1100,50 L1200,50"
            stroke="#83F0FF"
            strokeWidth="2"
            fill="none"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <p className="footer-text">
          &copy; {currentYear} Naol Meseret. Built with passion & code.
        </p>
      </div>
    </footer>
  )
}

export default Footer
