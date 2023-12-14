import React from 'react'

const Button = ({ name }) => {
  return (
    <div className='my-2'>
        <button className='px-5 m-2 py-1 rounded-lg font-semibold text-base bg-gray-100'>{name}</button>
    </div>
  )
}

export default Button
