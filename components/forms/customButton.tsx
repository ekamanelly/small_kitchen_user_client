import React, { useState } from "react";
import { CustomInputProps } from "./customInput";

export type CustomButtonProps = {
  icon?: any;
  value?: string;
  grids?: string;
  label?: string;
  err?: string | boolean;
  touched?: string | boolean;
  // onchange: (e: any) => void | null;
  onclick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onblur?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};
function CustomButton(props: CustomButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  if (isClicked) {
    setTimeout(() => {
      setIsClicked(false);
      console.log("back");
    }, 1500);
  }
  return (
    <div className={""}>
      <button
        className="transform ease-in-out delay-150 bg-pmy-lime h-10 px-6 rounded  flex justify-center items-center hover:scale-105 hover:shadow-md"
        onClick={props.onclick}
      >
        {props.icon}

        <div className="ml-1"> {props.value}</div>
      </button>
    </div>
  );
}

export default CustomButton;
