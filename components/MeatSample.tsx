import React from "react";
import Image from "next/image";

interface mealProps {
  name: string;
  price: string;
  url: string;
}

function MeatSample({ name, url, price }: mealProps) {
  return (
    <div className="shadow-lg w-4/5 relative">
      <div
        className="rounded-lg green p-1 w-full "
        style={{ backgroundColor: "", margin: 0 }}
      >
        <Image
          layout="responsive"
          width={400}
          height={250}
          // src={Meat}
          src={url}
          alt="photo"
          className="rounded-lg"
        />
      </div>
      <div className="absolute transform font-bold -translate-y-24 translate-x-1 glass-feel w-4/6 p-3 rounded-tr-lg rounded-bl-lg truncate">
        <ul>
          <li>{name}</li>
          <li>${price}</li>
        </ul>
      </div>
    </div>
  );
}

export default MeatSample;
