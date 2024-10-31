import React, { Children } from 'react'

type ButtonProps = React.ComponentProps<'button'> & {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  children: React.ReactNode,
}

const Button = ({type, children, ...restProps}: ButtonProps) => {
  return (
    <button type={type} {...restProps}> {children} </button>
  )
}

export default Button