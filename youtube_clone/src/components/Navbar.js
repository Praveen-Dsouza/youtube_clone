import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { toggleMenu } from "../utils/storeSlices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YT_LOGO, YT_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/storeSlices/searchSlice";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    // API Call
    // make an api call after every key press
    // but if the difference between 2 API calls is < 200ms
    // then decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    console.log('API Call' , searchQuery)
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // update search cache
    dispatch(cacheResults({ [searchQuery]: json[1] }))
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
      <div className="col-span-10 px-10">
        <div>
          <input
            placeholder="Search"
            className="w-3/5 border border-gray-300 font-normal border-r-0 py-2 px-5 rounded-l-full outline-blue-700"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-6 rounded-r-full bg-gray-100">
            <FontAwesomeIcon className="h-4" icon={faSearch} />
          </button>
        </div>
        {showSuggestions && <div className="relative bg-white mt-1 px-3 py-2 col-span-10 w-[32rem] shadow-lg rounded-xl border-gray-100">
          <ul>
            {suggestions.map((suggestion, index) => 
              <li key={index} className="py-1 px-3 text-base font-semibold hover:bg-gray-100"><FontAwesomeIcon className="h-3" icon={faSearch} /> &nbsp;{suggestion}</li>
            )}
          </ul>
        </div>}
      </div>
      <div className="col-span-1 my-1 dir-rtl">
        <FontAwesomeIcon className="h-8" icon={faCircleUser} />
      </div>
    </div>
  );
};

export default Navbar;
