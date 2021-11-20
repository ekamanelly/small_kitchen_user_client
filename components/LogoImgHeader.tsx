import React from "react";
import Image from "next/image";
import Logo from "../public/media/Logo.svg";

function LogoImg() {
  return (
    <div>
      <div className="img-fluid">
        <Image
          src={Logo}
          alt="photo"
          //   className="burnout"
        />
      </div>
    </div>
  );
}

export default LogoImg;
