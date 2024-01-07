import React from 'react'
import Button from './Button'
import { Link } from "react-router-dom";
import { BUTTON_NAMES } from '../../utils/constants';

const ButtonList = () => {

  return (
    <div className='flex mt-14'>
      {BUTTON_NAMES.map((item) => <Link key={item} to={"/results?search_query=" + item}><Button key={item} name={item}/></Link>)}
    </div>
  )
}

export default ButtonList
