import React from "react";
import { config, animated, useTrail } from "@react-spring/web";

export const AnimateMealTray = (props: any) => {
  const { meals, controller, animateClassName } = props;
  const mealTray = React.Children.toArray(props.children);

  const trail = useTrail(meals.length, {
    config: config.gentle,
    opacity: !controller ? 1 : 0,
    x: !controller ? 0 : 20,
    width: !controller ? 110 : 0,
    from: { opacity: 0, x: 20, width: 0 },
  });
  return (
    <div className={animateClassName}>
      {trail.map(({ width, ...style }, idx) => (
        <animated.div key={idx} style={style}>
          {mealTray[idx]}
        </animated.div>
      ))}
    </div>
  );
};

export const AnimateFavorite = (props: any) => {
  const { favorite, controller } = props;
  const favoriteMeal = React.Children.toArray(props.children);
  const trail = useTrail(favorite.length, {
    config: config.gentle,
    opacity: controller ? 1 : 0,
    x: controller ? 0 : 20,
    height: controller ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return trail.map(({ height, ...style }, idx) => (
    <animated.div key={idx} style={style}>
      {favoriteMeal[idx]}
    </animated.div>
  ));
};
