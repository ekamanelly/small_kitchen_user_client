import React from "react";
import DashBoardItems from "../../components/DashBoardItems";
import Footer from "../../components/Footer";
import LayoutForm from "../../components/layout/layoutForm";
import NavBar from "../../components/NavBar";
import useAuth from "../../hooks/auth.hook";
import { withProtect } from "../../hooks/route";

function Settings() {
  const { user } = useAuth();

  return (
    <div>
      <NavBar />
      <LayoutForm />
      <Footer />
    </div>
  );
}

export default withProtect(Settings);
