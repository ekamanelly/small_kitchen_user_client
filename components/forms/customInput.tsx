import React from "react";

export type CustomInputProps = {
  value?: string;
  grids?: string;
  label?: string;
  err?: string | boolean;
  touched?: string | boolean;
  onchange?:
    | React.ChangeEventHandler<HTMLInputElement>
    | React.ChangeEventHandler<HTMLTextAreaElement>
    | undefined;
  onclick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onblur?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

function CustomInput(props: CustomInputProps) {
  return (
    <div className="w-full  ">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        id={props.label}
        onChange={props.onchange}
        onBlur={props.onblur}
        placeholder={props.value}
        className="w-full h-8 p-3 mb-2"
      />
      {props.touched && <div>{props.err}</div>}
    </div>
  );
}

export default CustomInput;
