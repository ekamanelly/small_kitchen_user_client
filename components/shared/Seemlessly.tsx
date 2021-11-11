import Image from "next/image";
import React from "react";
// image;

function Seemlessly() {
  return (
    <div>
      <div className="lastStepWrap">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="vidWrap">
                <Image
                  //   layout="fill"
                  width={100}
                  height={100}
                  src="/media/signup.png"
                  className="burnout"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="seemless">
                <span>Navigate through Carousel mobile app</span>
                <br /> <span className="seem">Seemlessly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seemlessly;
