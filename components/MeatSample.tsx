import React from "react";
import Image from "next/image";
import Meat from "../public/media/Meat.png";

function MeatSample() {
  return (
    <div>
      <div
        className="rounded-lg flex green justify-center p-1"
        style={{ backgroundColor: "", margin: 0 }}
      >
        <Image src={Meat} alt="photo" className=" rounded-lg " />
        <div className=" " style={{ backgroundColor: "white" }}>
          <ul className="list-disc ">
            <li className="flex items-start">
              <span className="h-6 flex items-center sm:h-7">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="ml-2">
                price: N
                <code className="text-sm font-bold text-gray-900"> 1500</code>
              </p>
            </li>
            <li className="flex items-start">
              <span className="h-6 flex items-center sm:h-7">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="ml-2">
                Time
                <code className="text-sm font-bold text-gray-900"> 30 Min</code>
              </p>
            </li>
            <li className="flex items-start">
              <span className="h-6 flex items-center sm:h-7">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="ml-2">
                name:{" "}
                <code className="text-sm font-bold text-gray-900">
                  Mellon stew and roasted cat fish
                </code>
              </p>
            </li>

            <li> </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MeatSample;
