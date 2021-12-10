import { CustomInputProps } from "./customInput";

export type CustomTextAreaProps = {
  value?: string;
  grids?: string;
  label?: string;
  err?: string | boolean;
  touched?: string | boolean;
  onchange: (e: any) => void | null;
  onclick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onblur?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

function CustomTextArea(props: CustomTextAreaProps) {
  return (
    <div className="w-full  ">
      <label htmlFor={props.label}>{props.label}</label>
      <textarea
        id={props.label}
        onChange={(e) => props.onchange(e)}
        onBlur={props.onblur}
        placeholder={props.value}
        className="w-full h-8 p-3 mb-2"
      ></textarea>
      {props.touched && <div>{props.err}</div>}
    </div>
  );
}

export default CustomTextArea;
