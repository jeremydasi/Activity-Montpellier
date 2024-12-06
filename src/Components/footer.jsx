import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-bottom">
        <h5>
          &copy; {new Date().getFullYear()} Tous droits réservés.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;