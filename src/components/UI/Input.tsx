import React, { forwardRef } from "react";

interface IInput {
  id: string;
  className?: string;
  value?: string;
  name: string;
  type: string;
  onChange?: any /* () => void | ((event: React.ChangeEvent<HTMLInputElement>) => void) */;
  onBlur?: () => void;
  onClick?: () => void;
  placeholder?: string;
  readonly?: boolean;
}

const Input: React.FC<IInput> = forwardRef((props, ref) => {
  return (
    <input
      id={props.id}
      type={props.type}
      className={`h-10 w-full rounded-lg px-8 text-blue placeholder:text-blue border-solid border-2 border-blue ${
        props.className || ""
      }`}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onClick={props.onClick}
      placeholder={props.placeholder}
      readOnly={props.readonly}
    />
  );
});

export default Input;
