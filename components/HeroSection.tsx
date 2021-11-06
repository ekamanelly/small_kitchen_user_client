import Image from "next/image";
import React from "react";

// image
function HeroSection() {
  return (
    <div>
      <div className="container landingPage">
        <div className="row">
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
          <div className="col-lg-6 d-none d-lg-block">
            {/* <Image
              src="/media/hero.png"
              layout="fill"
              //   width={100}
              //   height={100}
              //   alt="hero img"
              //   className="imgHeroImg"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
