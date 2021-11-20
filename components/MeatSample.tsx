import React from "react";
import Image from "next/image";
import Meat from "../public/media/Meat.png";

function MeatSample() {
  return (
    <div>
      <div className="img-fluid">
        <Image src={Meat} alt="photo" />
      </div>
    </div>
  );
}

export default MeatSample;
