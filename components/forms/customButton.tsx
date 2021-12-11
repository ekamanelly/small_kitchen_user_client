import React from "react";
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
  return (
    <div className="">
      <button
        className="bg-pmy-lime h-10 px-6  rounded text-white"
        onClick={props.onclick}
      >
        {props.value}
      </button>
    </div>
  );
}

export default CustomButton;
