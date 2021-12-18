import React from "react";
import DashBoardItems from "../../components/DashBoardItems";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import useAuth from "../../hooks/auth.hook";
import { withProtect } from "../../hooks/route";
import { useRecoilState, RecoilState } from "recoil";
import { RevealForm } from "../../atoms";
import LayoutForm from "../../components/layout/layoutForm";
import { FadeInAndOut } from "../../components/animation/reactSpringAnimation";

function VendorProfile() {
  const { user } = useAuth();
  const [showingForm, setForm] = useRecoilState(RevealForm);
  return (
    <div>
      <NavBar />
      {showingForm ? (
        <DashBoardItems user={user} />
      ) : (
        <FadeInAndOut controller={showingForm} component={<LayoutForm />} />
      )}
      <Footer />
    </div>
  );
}

export default withProtect(VendorProfile);
