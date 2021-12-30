import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState, RecoilState } from "recoil";
import { BusinessDetails, RevealDishes, RevealForm } from "../atoms";
// import { RevealForm } from "../atoms";
import BigBadge from "../public/media/BigBadge.svg";
import Tab from "./Tab";

interface vendors {
  businessName: string;
}

interface DashboardProps {
  user: {
    displayName: string;
    photoURL: string;
  };
}
function DashBoardItems(props: DashboardProps) {
  const [showingDishes, setDishes] = useRecoilState(RevealDishes);
  const [registrationDetail, setRegistrationDetails] =
    useRecoilState(BusinessDetails);

  console.log({ registrationDetail });
  return (
    <div>
      <div className="container">
        <div className="flex space-x-2">
          <div className="sectionOne">
            <div
              className="rounded-lg green p-1 w-full "
              style={{ backgroundColor: "", margin: 0 }}
            >
              {/* <Image
                layout="responsive"
                width={400}
                height={250}
                src={BigBadge}
                alt="photo"
                className="rounded-lg"
              /> */}
              <Image src={BigBadge} alt="photo" />
            </div>
          </div>
          <div className="sectionTwo">
            <div className="serviceNameWrap">
              <span className="serviceName">
                {registrationDetail.companyName}
              </span>
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
                  <li>
                    {registrationDetail.state} {registrationDetail.country}
                  </li>
                  <li>{registrationDetail.phone}</li>
                  <li>{registrationDetail.description}</li>
                </ul>
              </div>
            </div>

            <div className="buttons">
              <div>
                <button
                  onClick={() => setDishes(!showingDishes)}
                  className="followbtn"
                >
                  {showingDishes ? "Customer" : "Dishes"}
                </button>
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
