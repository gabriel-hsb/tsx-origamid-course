import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  handleInputChange: React.Dispatch<React.SetStateAction<string>>;
};

const InputWithLabel = ({
  type,
  label,
  handleInputChange,
  ...restProps
}: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label id={type} htmlFor={label}>
        {" "}
        {label}{" "}
      </label>
      <input
        onChange={({ target }) => handleInputChange(target.value)}
        id={label}
        {...restProps}
        type={type}
      />
    </div>
  );
};

export default InputWithLabel;
