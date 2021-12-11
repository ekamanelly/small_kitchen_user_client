import { CustomInputProps } from "./customInput";

export type CustomTextAreaProps = {
  icon?: any;
  name: string;
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
    <div className="w-full border-3 border-pmy-lime border-r-6 rounded ">
      <label htmlFor={props.label} className="flex">
        {props.icon && (
          <span className="transform translate-y-1 px-2">{props.icon}</span>
        )}
        <span className="text-base font-semibold">{props.label}</span>
      </label>

      <textarea
        name={props.name}
        id={props.label}
        onBlur={props.onblur}
        placeholder={props.value}
        onChange={props.onchange}
        className="w-full h-8 p-3 mb-2 outline-none font-semibold text-base"
      ></textarea>
      {props.touched && <div>{props.err}</div>}
    </div>
  );
}

export default CustomTextArea;
