import React from "react";
import { CustomInputProps } from "./customInput";

function CustomButton(props: CustomInputProps) {
  return (
    <div>
      <button className="bg-lime" onClick={props.onclick}>
        {props.value}
      </button>
    </div>
  );
}

export default CustomButton;
