import * as React from "react";
import samplePhoto from "../public/media/samplePhoto.svg";
import Image from "next/image";
import { BiSmile } from "react-icons/bi";
import DateReactions from "./DateReactions";

function CommentCard() {
  return (
    <div>
      <div className="m-4 p-6 max-w-full mx-auto bg-gray-100 rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0"></div>
        <div>
          <div className="img-fluid ">
            <Image src={samplePhoto} alt="photo" />
          </div>
          <div className="float-right">
            <BiSmile />
          </div>
          <div className="text-xl font-medium text-black">Hope Waje</div>
          <p className="text-black">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <DateReactions />
    </div>
  );
}

export default CommentCard;
