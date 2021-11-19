import React from "react";
import LogoImg from "./LogoImg";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footerDiv">
          <div className="nameNav">
            <span className="footerName">
              <LogoImg />
            </span>
          </div>
          <div className="w-28 socials d-flex text-green-500">
            <span className="text-green-500">
              <AiFillInstagram />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <ImTwitter />
            </span>
            <span>
              <GrLinkedin />
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
