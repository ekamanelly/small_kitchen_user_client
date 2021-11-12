import Image from "next/image";
import React from "react";
import ImgTwo from "../public/media/ImgTwo.png";

function MoreMoney() {
  return (
    <div>
      <div className="hustWrap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="businessGrowth">
                Need to make more money?
                <br />{" "}
                <span>
                  Double your hustle with <br /> Carousel.
                </span>
              </div>
              <div className="bDoubleDiv">
                <span className="bDoubleDesc">
                  Join Carousel and market your skills to hundreds of customers
                  <br /> around you and beyond. create a business profile and
                  double your hustle <br /> and sell your food with simple
                  visual posts.
                  <br /> We wil handle delivea
                </span>
              </div>
              <div className="bDouble">
                <button className="btnDouble">Double my Hustle!</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="xyz">
                <div className="img-fluid">
                  <Image
                    src={ImgTwo}
                    alt="photo"
                    //   className="imagesTwo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreMoney;
