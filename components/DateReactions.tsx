import * as React from "react";
import { BiLike } from "react-icons/bi";

function DateReactions() {
  return (
    <div>
      <div className="flex space-x-4">
        <span>Jun 1st</span>
        <span>Like</span>
        <span>Reply</span>
        <span>
          <BiLike />
        </span>
        <span>5</span>
      </div>
    </div>
  );
}

export default DateReactions;
