import React from "react";
import DashBoardItems from "../../components/DashBoardItems";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { withProtect } from "../../hooks/route";

function VendorProfile() {
  return (
    <div>
      <NavBar />
      <DashBoardItems />
      <Footer />
    </div>
  );
}

export default withProtect(VendorProfile);
