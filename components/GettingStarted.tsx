import Image from "next/image";
import React from "react";
import oneSign from "../public/media/oneSign.png";

function GettingStarted() {
  return (
    <div>
      <div className="getStarted">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="orgSteps">
                Get started in <span>3 easy steps</span>
              </div>
              <div className="steps">
                <p className="text-xl ">
                  Prepare mouthwatering finger continental dish!
                </p>{" "}
              </div>
              <div className="steps">
                <div>
                  <p className="text-xl ">
                    Post it, share a little about the meal but not your mum's
                    secret recipe!!
                  </p>{" "}
                </div>
              </div>
              <div className="steps">
                <p className="text-xl ">We deliver what you sell!!!</p>{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="vidWrap">
                <div className="img-fluid">
                  <Image
                    src={oneSign}
                    alt="photo"
                    //   className="burnout"
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

export default GettingStarted;
