import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

const InputWithLabel = ({ type, label, ...restProps }: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label id={type} htmlFor={label}>
        {" "}
        {label}{" "}
      </label>
      <input id={label} {...restProps} type={type} />
    </div>
  );
};

export default InputWithLabel;
