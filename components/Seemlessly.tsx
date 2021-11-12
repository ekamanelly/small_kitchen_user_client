import Image from "next/image";
import React from "react";
import GetStarted from "../public/media/GetStarted.png";

function Seemlessly() {
  return (
    <div>
      <div className="lastStepWrap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="vidWrap">
                <div className="img-fluid">
                  <Image
                    src={GetStarted}
                    alt="photo"
                    //   className="burnout"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
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
