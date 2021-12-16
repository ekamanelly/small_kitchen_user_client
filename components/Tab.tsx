import React, { useState } from "react";
import { ListOfMeal } from "../model/meal";
import { AnimateMealTray } from "./animation/reactSpringAnimation";
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
        {dishes ? <Dishes showDish={!dishes} /> : <Feedback />}
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
interface dishProps {
  showDish: boolean;
}
const Dishes = (props: dishProps) => {
  return (
    <div className="lg:container">
      <div
      // className=
      // style={{ backgroundColor: "red" }}
      >
        <AnimateMealTray
          meals={ListOfMeal}
          controller={props.showDish}
          animateClassName="grid lg:grid-cols-2  md:grid-cols-1 gap-1 sm :grid-cols-1 px-10"
        >
          {ListOfMeal.map((cur, idx) => (
            <div key={idx} className="flex justify-center">
              <MeatSample
                name={cur.name}
                price={cur.price.toString()}
                url={cur.url}
              />
            </div>
          ))}
        </AnimateMealTray>
      </div>
    </div>
  );
};

export default Tab;
