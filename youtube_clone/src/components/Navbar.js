import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { toggleMenu } from "../utils/storeSlices/appSlice";
import { useDispatch } from "react-redux";
import { YT_LOGO, YT_SEARCH_API } from "../utils/constants";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    // API Call
    // make an api call after every key press
    // but if the difference between 2 API calls is < 200ms
    // then decline the API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log('search', json)
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col px-7 py-2 shadow-lg h-14">
      <div className="flex col-span-1">
        <FontAwesomeIcon className="h-6 my-2 cursor-pointer" onClick={() => toggleMenuHandler()} icon={faBars} />

        <img
          className="h-6 my-2 mx-2"
          src={YT_LOGO}
          alt="logo"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          placeholder="Search"
          className="w-1/2 border border-gray-300 font-normal border-r-0 py-2 px-4 rounded-l-full"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
