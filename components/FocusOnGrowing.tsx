import Image from "next/image";
import React from "react";
import useAuth from "../hooks/auth.hook";
import burnout from "../public/media/burnout.png";

function FocusOnGrowing() {
  const { error, user, loginWithGoogle, logOut } = useAuth();
  return (
    <div>
      <div className="bGWrap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <div className="burnGDiv">
                <div className="img-fluid">
                  <Image
                    src={burnout}
                    alt="photo"
                    //   className="burnout"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="businessGrowth">
                Focus on growing your
                <br /> business online
                <span>
                  We'll handle <br /> your delivery.
                </span>
              </div>
              <div className="bGrowthDiv">
                <span className="bGDesc">
                  Create a vendor profile/store, start a remote restaurant
                  <br /> and sell your food with simple visual posts.
                  <br /> We wil handle delivery
                </span>
              </div>
              <div className="bGrowthbtn" onClick={loginWithGoogle}>
                <button className="btnGrow">Grow my Business</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FocusOnGrowing;
