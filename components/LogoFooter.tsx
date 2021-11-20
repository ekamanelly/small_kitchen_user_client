import * as React from "react";
import Image from "next/image";
import LogoTwo from "../public/media/LogoTwo.svg";
function LogoFooter() {
  return (
    <div>
      <div className="img-fluid">
        <Image src={LogoTwo} alt="photo" />
      </div>
    </div>
  );
}

export default LogoFooter;
