import React from 'react';
import user from "../../../utils/icons/navbar/user.png"

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex text-sm items-center px-2 py-1'>
        <img className='h-6' src={user} alt="user"/>
        <span className='font-semibold text-gray-600 px-2'>{name}</span>
        <p className='font-semibold'>{message}</p>
    </div>
  )
}

export default ChatMessage
