// import Image from "next/image";
// import Image from "next/image";
import React from "react";
// import { Interface } from "readline";

interface vendors {
  businessName: string;
}

function DashBoardItems() {
  return (
    <div>
      <div className="secondRow container">
        <div className="row">
          <div className="">
            <div className="servicePic"></div>
          </div>
          <div className="innerDetails">
            <div className="serviceNameWrap">
              <span className="serviceName">Big bit</span>
              <div className="ratings">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="stars">4.8 (20 ratings)</div>
              </div>
            </div>
            <div className="dishesFollowersWrap">
              <div className="dishes">
                <div className="dishnr">32</div>
                <div className="dish">
                  <span className="text-muted">Dishes</span>
                </div>
              </div>

              <div className="followers">
                <div className="follownr">1000</div>
                <div className="follow">
                  <span className="text-muted">Followers</span>
                </div>
              </div>
            </div>
            <div>
              <div className="about">
                <span className="aboutService">About Burnout Grills</span>
              </div>
              <div className="aboutServiceWrap">
                <ul>
                  <li>Yaba, Lagos</li>
                  <li>Sumptuous meals</li>
                  <li>Continental and African Dishes</li>
                </ul>
              </div>
            </div>

            <div className="buttons">
              <div>
                <button className="followbtn">Follow</button>
              </div>
              <div>
                <button className="sendMsg">Send a Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="dFbWrap">
            <div className="dishNav">Dishes</div>
            <div className="feedBck">Feedback (115)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardItems;
