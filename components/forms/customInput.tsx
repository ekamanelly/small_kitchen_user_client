import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
// import { Transform } from "stream";

export type CustomInputProps = {
  icon?: any;
  name: string;
  value?: string;
  grids?: string;
  label?: string;
  err?: string | boolean;
  touched?: string | boolean;
  onchange: any;
  onclick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onblur?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

function CustomInput(props: CustomInputProps) {
  return (
    <div className="w-full ">
      <label htmlFor={props.label} className="flex">
        {props.icon && (
          <span className="transform translate-y-1 px-2">{props.icon}</span>
        )}
        <span className="text-base font-semibold">{props.label}</span>
      </label>
      <div className="h-12 mb-2 border-3 flex items-center  border-pmy-lime border-r-6 rounded">
        <input
          name={props.name}
          id={props.label}
          onChange={props.onchange}
          onBlur={props.onblur}
          placeholder={props.value}
          className="w-full h-full p-3 outline-none font-semibold text-base"
        />
      </div>
      {props.touched && <div>{props.err}</div>}
    </div>
  );
}

export default CustomInput;
