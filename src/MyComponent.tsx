// 1 - Crie um componente Input
// 2 - Ele deve retornar <label> e <input>, dentro de uma <div>
// 3 - Recebe uma propriedade chamada label
// 4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>
// 5 - Permita o uso de qualquer propriedade de input no componente Input.
// 6 - Adicione 1rem de marginBottom na <div>

import React from "react"
import { toCamelCase } from "./functions/toCamelCase.ts"

type MyComponentProps =  React.ComponentProps<'input'> & {
  label: string  
}

const MyComponent = ({ label, ...restProps }: MyComponentProps) => {
  const labelId = toCamelCase(label) + 'Label'
  const inputId = toCamelCase(label) + 'Input'

  return (
    <div style={{ marginBottom: '1rem' }}>
        <label id={labelId} htmlFor={inputId}> { label } </label>
        <input id={inputId} style={{ maxWidth: '400px' }} {...restProps} type="text" name={label}/>
    </div>
  )
}

export default MyComponent