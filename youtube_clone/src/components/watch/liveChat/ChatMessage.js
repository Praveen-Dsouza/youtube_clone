import React from 'react';
import user from "../../../utils/icons/navbar/user.png"

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className='h-6' src={user} alt="user"/>
        <span className='font-bold px-2'>{name}</span>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage
