import React from "react";
import DashBoardItems from "../../components/DashBoardItems";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import useAuth from "../../hooks/auth.hook";
import { withProtect } from "../../hooks/route";

function VendorProfile() {
  const { user } = useAuth();

  return (
    <div>
      <NavBar />
      <DashBoardItems user={user} />
      <Footer />
    </div>
  );
}

export default withProtect(VendorProfile);
