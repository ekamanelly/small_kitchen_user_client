import React, { useState } from "react";
import DashBoardItems from "../../components/DashBoardItems";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import useAuth from "../../hooks/auth.hook";
import { withProtect } from "../../hooks/route";
import { useRecoilState, RecoilState } from "recoil";
import { RevealForm } from "../../atoms";
import LayoutForm from "../../components/layout/layoutForm";
import { FadeInAndOut } from "../../components/animation/reactSpringAnimation";
import CustomButton from "../../components/forms/customButton";

function VendorProfile() {
  const { user } = useAuth();
  const [showingForm, setForm] = useRecoilState(RevealForm);
  const [showNotice, setShowNotice] = useState(false);
  return (
    <div>
      <NavBar />
      {showingForm ? (
        <DashBoardItems user={user} />
      ) : showNotice ? (
        <div>
          <FadeInAndOut controller={showingForm} component={<LayoutForm />} />
        </div>
      ) : (
        <FadeInAndOut
          controller={showNotice}
          component={<Notification controller={setShowNotice} />}
        />
      )}
      <Footer />
    </div>
  );
}

interface notificationProps {
  controller: (x: boolean) => any;
}
function Notification(props: notificationProps) {
  const { user } = useAuth();
  return (
    <div className="h-96 flex justify-center mb-20  ">
      <div className="h-full lg:w-8/12 md:w-11/12">
        <div>
          <p className="text-3xl">Hello {user.displayName},</p>
          <p className="text-3xl">
            It is obvious you have the perfect picture of business, what it will
            be in the future, how it will satisfy needs and eventually, grow to
            be an household name.
          </p>
          <p className="text-base">So does your business have a name?</p>
        </div>

        <div className="">
          <CustomButton
            label="yes"
            value="yes"
            onclick={() => props.controller(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default withProtect(VendorProfile);
