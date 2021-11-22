import Image from "next/image";
import React from "react";
import useAuth from "../hooks/auth.hook";
import BigBadge from "../public/media/BigBadge.svg";
import Tab from "./Tab";

interface vendors {
  businessName: string;
}

function DashBoardItems() {
  const { user } = useAuth();
  console.log(user.displayName);
  return (
    <div>
      <div className="container">
        <div className="flex space-x-2">
          <div className="sectionOne">
            <Image src={BigBadge} alt="photo" />
          </div>
          <div className="sectionTwo">
            <div className="serviceNameWrap">
              <span className="serviceName">Burnout Grills</span>
              <div className="ratings">
                <div className="stars"></div>
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
                  <li>Owner {user.displayName}</li>
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
        <Tab />
      </div>
    </div>
  );
}

export default DashBoardItems;
