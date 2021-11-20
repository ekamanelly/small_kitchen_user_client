import React, { useState } from "react";
import CommentCard from "./CommentCard";
import MeatSample from "./MeatSample";

function Tab() {
  return (
    <div>
      <div className="container">
        <div className="dishes">
          <button>Dishes</button>
        </div>
        <div className="feedback">
          <button>Feedback</button>
        </div>
      </div>
      <div className="container feedback">
        <ul>
          <li>
            <CommentCard />
            <ul>
              <li>
                <CommentCard />
              </li>
              <li>
                <CommentCard />
              </li>
            </ul>
          </li>
          <li>
            <CommentCard />
          </li>
        </ul>
      </div>
      <div className="container dishes">
        <div className="flex">
          <div>
            <MeatSample />
          </div>
          <div>
            <MeatSample />
          </div>
          <div>
            <MeatSample />
          </div>
        </div>
        <div className="flex">
          <div>
            <MeatSample />
          </div>
          <div>
            <MeatSample />
          </div>
          <div>
            <MeatSample />
          </div>
        </div>
        <div className="flex">
          <div>
            <MeatSample />
          </div>
          <div>
            <MeatSample />
          </div>
          <div>
            <MeatSample />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab;
