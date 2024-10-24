import React from 'react';

type ButtonProps = {
    total: number,
    setTotal: React.Dispatch<React.SetStateAction<number>>,

}

const Button = ({ total, setTotal, ...restProps }: ButtonProps) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)} {...restProps}>Incrementar {total}</button>
  );
};

export default Button;
