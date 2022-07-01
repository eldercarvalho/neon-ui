import React from 'react'

const teste = [
  'teste 1',
  'teste 2',
]

type ButtonProps = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <button>{children} {teste.map(t => <span>{t}</span>)}</button>
}

export default Button