import React, { useState } from "react";
import CommentCard from "./CommentCard";
import MeatSample from "./MeatSample";

function Tab() {
  const [dishes, setDishes] = useState<boolean>(true);
  return (
    <div>
      <div className="container">
        <div className="feedback">
          <button onClick={() => setDishes(!dishes)}>
            {dishes ? " show Feedback" : "show Dishes"}
          </button>
        </div>
        {dishes ? <Dishes /> : <Feedback />}
      </div>
    </div>
  );
}
const Feedback = () => {
  return (
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
  );
};

const Dishes = () => {
  return (
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
  );
};

export default Tab;
