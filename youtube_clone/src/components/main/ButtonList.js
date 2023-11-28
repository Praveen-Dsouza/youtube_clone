import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const btnNames = ['All', 'Gaming', 'Songs', 'Live', 'Cricket', 'Soccer', 'News', 'Cooking', 'New to you']

  return (
    <div className='flex'>
      {btnNames.map((item) => <Button key={item} name={item}/>)}
    </div>
  )
}

export default ButtonList
