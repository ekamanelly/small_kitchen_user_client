import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState, RecoilState } from "recoil";
import { RevealForm } from "../atoms";
import BigBadge from "../public/media/BigBadge.svg";
import CustomButton from "./forms/customButton";
import LayoutForm from "./layout/layoutForm";
import Tab from "./Tab";

interface vendors {
  businessName: string;
}

interface DashboardProps {
  user: {
    displayName: string;
  };
}
function DashBoardItems(props: DashboardProps) {
  const [reveal, setReveal] = useRecoilState(RevealForm);
  const router = useRouter();

  return (
    <div>
      {reveal && <LayoutForm />}
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
                  <li>Owner {props.user.displayName}</li>
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
