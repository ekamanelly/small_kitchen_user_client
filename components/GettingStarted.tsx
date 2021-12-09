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
                <div>1</div>Prepare month watering, finger linking continental
                meal!
              </div>
              <div className="steps">
                <div>2</div>Make post it, share a little about the meal but not
                your mum's secret recipe...
              </div>
              <div className="steps">
                <div>3</div> We deliver when you sell.
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
