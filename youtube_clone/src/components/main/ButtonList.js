import React, { useRef, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { BUTTON_NAMES } from "../../utils/constants";
import forwardArrow from "../../utils/icons/common/forwardArrow.png";
import backArrow from "../../utils/icons/common/backArrow.png";

const ButtonList = () => {
  const btnContainerRef = useRef(null);
  const { current } = btnContainerRef;
  const [hideBtns, setHideBtns] = useState(0);

  const scrollBtns = (topic) => {
    const value = 120;
    if (current) {
      if (topic === "prev") {
        current.scrollLeft -= value;
        console.log('prev', current.scrollLeft)
        setHideBtns(current.scrollLeft);
      } else {
        current.scrollLeft += value;
        console.log('next', current.scrollLeft)
        setHideBtns(current.scrollLeft);
      }
    }
  };

  return (
    <div className="flex bg-white fixed w-[calc(95%)] overflow-hidden">
      <button onClick={() => scrollBtns("prev")} className={`absolute py-5 bg-gradient-to-r from-white ${hideBtns === 0 && 'hidden'}`}>
        <div className="hover:bg-gray-200 bg-white p-1 rounded-full">
          <img
            className="h-4 w-4 cursor-pointer"
            src={backArrow}
            alt=""
          />
        </div>
      </button>
      <div ref={btnContainerRef} className="flex overflow-x-hidden mx-2">
        {BUTTON_NAMES.map((item) => (
          <Link key={item} to={"/results?search_query=" + item}>
            <Button key={item} name={item} />
          </Link>
        ))}
      </div>
      <button onClick={() => scrollBtns("next")} className={`absolute right-0 py-5 bg-gradient-to-l from-white ${hideBtns >= 230 && 'hidden'}`}>
        <div className="hover:bg-gray-200 bg-white p-1 rounded-full">
          <img
            className="h-4 w-4 cursor-pointer"
            src={forwardArrow}
            alt=""
          />
        </div>
      </button>
    </div>
  );
};

export default ButtonList;
