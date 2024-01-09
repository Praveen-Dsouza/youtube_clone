import React from 'react'

const Button = ({ name }) => {
  return (
    <div className='my-2'>
      <button className={`px-3 m-2 py-1 hover:bg-gray-200 rounded-lg font-semibold text-sm whitespace-nowrap ${name === 'All'? 'bg-black text-white': 'bg-gray-100'}`}>{name}</button>
    </div>
  )
}

export default Button
