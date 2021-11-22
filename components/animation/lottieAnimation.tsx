import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({
  lotti: lottie,
  width,
  height,
}: {
  lotti: any;
  width: number;
  height: number;
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}
