import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="grid grid-flow-col px-7 py-2 shadow-lg h-14">
      <div className="flex col-span-1">
        <FontAwesomeIcon className="h-6 my-2" icon={faBars} />

        <img
          className="h-6 my-2 mx-2"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="logo"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          placeholder="Search"
          className="w-1/2 border border-gray-300 font-normal border-r-0 py-2 px-4 rounded-l-full"
          type="tex px-10t"
        />
        <button className="border border-gray-400 py-2 px-6 rounded-r-full bg-gray-100">
          <FontAwesomeIcon className="h-4" icon={faSearch} />
        </button>
      </div>
      <div className="col-span-1 my-1 dir-rtl">
        <FontAwesomeIcon className="h-8" icon={faCircleUser} />
      </div>
    </div>
  );
};

export default Navbar;
