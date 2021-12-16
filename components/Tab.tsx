import React, { useState } from "react";
import { ListOfMeal } from "../model/meal";
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
    <div className="lg:container">
      <div
        className="grid lg:grid-cols-2  md:grid-cols-1 gap-1 sm :grid-cols-1 px-10"
        // style={{ backgroundColor: "red" }}
      >
        {ListOfMeal.map((cur) => (
          <MeatSample {...cur} />
        ))}
      </div>
    </div>
  );
};

export default Tab;
