import React from 'react'

const Button = ({label}) => {
  return (
    <input className='btn' type="button" value={label}/>
  )
}

export default Button