import React, { useRef } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { BUTTON_NAMES } from "../../utils/constants";
import forwardArrow from "../../utils/icons/common/forwardArrow.png";
import backArrow from "../../utils/icons/common/backArrow.png";

const ButtonList = () => {
  const btnContainerRef = useRef(null);
  const { current } = btnContainerRef;

  const scrollBtns = (topic) => {
    const value = 120;
    if (current) {
      if (topic === "prev") {
        current.scrollLeft -= value;
      } else {
        current.scrollLeft += value;
      }
    }
  };

  return (
    <div className="flex bg-white fixed w-[calc(97%)] overflow-hidden">
      <button className={`absolute py-5 bg-gradient-to-r from-white`}>
        <div className="hover:bg-gray-100 bg-white p-1 rounded-full">
          <img
            onClick={() => scrollBtns("prev")}
            className="h-4 w-4 cursor-pointer"
            src={backArrow}
            alt=""
          />
        </div>
      </button>
      <div ref={btnContainerRef} className="flex overflow-x-hidden overflow-hidden">
        {BUTTON_NAMES.map((item) => (
          <Link key={item} to={"/results?search_query=" + item}>
            <Button key={item} name={item} />
          </Link>
        ))}
      </div>
      <button className="absolute right-3 py-5 bg-gradient-to-l from-white">
        <div className="hover:bg-gray-100 bg-white p-1 rounded-full">
          <img
            onClick={() => scrollBtns("next")}
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
