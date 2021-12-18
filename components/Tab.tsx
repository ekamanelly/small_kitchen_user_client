import { useRouter } from "next/router";
import React, { useState } from "react";
import { ListOfMeal } from "../model/meal";
import { AnimateMealTray } from "./animation/reactSpringAnimation";
import CommentCard from "./CommentCard";
import MeatSample from "./MeatSample";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { RevealDishes } from "../atoms";

function Tab() {
  const [showingDishes] = useRecoilState(RevealDishes);

  return (
    <div>
      <div className="container">
        <div className="feedback"></div>
        {showingDishes ? <Dishes showDish={!showingDishes} /> : <Feedback />}
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
  const router = useRouter();
  const seeDetail = (slug: string) => router.push(`details/${slug}`);
  return (
    <div className="lg:container">
      <div
      // className=
      // style={{ backgroundColor: "red" }}
      >
        <AnimateMealTray
          meals={ListOfMeal}
          controller={props.showDish}
          animateClassName="grid lg:grid-cols-2  md:grid-cols-2 gap-1 sm :grid-cols-1 "
        >
          {ListOfMeal.map(({ name, price, url, slug }, idx) => (
            <div
              onClick={() => seeDetail(slug)}
              key={idx}
              className="flex justify-center"
            >
              <MeatSample name={name} price={price.toString()} url={url} />
            </div>
          ))}
        </AnimateMealTray>
      </div>
    </div>
  );
};

export default Tab;
