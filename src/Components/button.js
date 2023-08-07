import React from 'react'

const Button = ({children, text, className}) => {
  return (
    <button className={className}> {children} </button>
  )
}

export default Button;