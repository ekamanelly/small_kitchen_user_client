import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footerDiv">
          <div className="nameNav">
            <span className="footerName">carousel.</span>
          </div>
          <div className="socials">
            <span>
              <i className="fab fa-instagram"></i>
            </span>
            <span>
              <i className="fab fa-facebook-f"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-linkedin"></i>
            </span>
          </div>
          <div className="copyright">
            <span> &copy; Copyright Carousel Technologies </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
