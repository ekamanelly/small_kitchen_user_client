import Image from "next/image";
import React from "react";
import Hero from "../public/media/Hero.png";


function HeroSection() {
  return (
    <div>
      <div className="container landingPage">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="leftCol">
              <div className="welcomeAddress">
                Finding<span> Food</span> and <br /> <span>Services</span> just
                became <br /> super easy!
              </div>
              <div className="wDescDiv">
                <span className="wDesc">
                  Carousel helps you find and order food and <br /> services
                  from vendors near you.
                </span>
              </div>
              <div className="btnPlayDiv">
                <button className="btnPlay">
                  Learn more about carousel
                  <i className="fas fa-play-circle"> </i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="img-fluid">
              <Image
                src={Hero}
                alt="photo"
                //   className="imgHeroImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
