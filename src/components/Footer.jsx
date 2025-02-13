import React from "react";
import "../customStyles.css"; // Corrected import path

function Footer() {
  return (
    <footer>
      <p>© 2025 Alex Barrios</p>
      <div className="footer-links">
        <a href="https://github.com/ReplicantCoder9000" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/abarrios" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/12345678" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a>
      </div>
    </footer>
  );
}

export default Footer;
