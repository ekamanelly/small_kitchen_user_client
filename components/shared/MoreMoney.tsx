import Image from "next/image";
import React from "react";

// image

function MoreMoney() {
  return (
    <div>
      <div className="hustWrap">
        <div className="container">
          <div className="row">
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
                <Image
                  src="/media/image_2.png"
                  width={100}
                  height={100}
                  //   layout="fill"
                  //   width={500}
                  //   height={500}
                  className="imagesTwo responsive"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreMoney;
