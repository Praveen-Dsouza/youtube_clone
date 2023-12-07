import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <FontAwesomeIcon className="h-6" icon={faCircleUser} />
        <span className='font-bold px-2'>{name}</span>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage
