import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser
} from "@fortawesome/free-solid-svg-icons";
import { toggleMenu } from "../utils/storeSlices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YT_LOGO, YT_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/storeSlices/searchSlice";
import { useNavigate, Link } from "react-router-dom";
import bell from "../utils/icons/bell.png";
import createVideo from "../utils/icons/createVideo.png";
import clear from "../utils/icons/clear.png";
import search from "../utils/icons/search.png";
import mic from "../utils/icons/mic.jpg";
import bars from "../utils/icons/bars.jpg";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // API Call
    // make an api call after every key press
    // but if the difference between 2 API calls is < 200ms
    // then decline the API call
    const timer = setTimeout(() => {
      const cache = searchCache[searchQuery];
      if (cache) {
        setSuggestions(cache);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // update search cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestion = (e) => {
    setShowSuggestions(false);
    setSearchQuery(e.target.innerText);
    navigate("results?search_query=" + (e.target.innerText || searchQuery));
  };

  return (
    <div className="w-screen fixed grid grid-flow-col z-20 px-7 py-2 h-14 bg-white">
      <div className="flex col-span-1">
        {/* <FontAwesomeIcon
          className="h-5 my-2 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          icon={faBars}
        /> */}
        <img className="h-7 mt-1 cursor-pointer" src={bars} onClick={() => toggleMenuHandler()} alt="clear" />
        <Link to="/">
          <img className="h-5 my-2 ml-6" src={YT_LOGO} alt="logo" />
        </Link>
      </div>
      <div className="col-span-10 px-10">
        <div className="justify-center flex">
          <div
            className={`flex rounded-l-full ${
              showSuggestions && "border border-blue-700"
            }`}
          >
            {suggestions.length > 0 && (
              <button
                className={`border rounded-l-full border-gray-300 border-r-0 pl-5 bg-white `}
              >
                <img className="h-4 my-2" src={search} alt="search" />
              </button>
            )}
            <input
              placeholder="Search"
              className={`w-[32rem] border border-gray-300 border-r-0 font-normal py-1 outline-none ${
                suggestions.length
                  ? "border-l-0 rounded-l-0 px-3"
                  : "rounded-l-full px-5"
              }`}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSuggestion(e);
                }
              }}
            />
            {suggestions.length > 0 && (
              <button
                className={`border border-gray-300 border-l-0 px-3 bg-white `}
                onClick={() => setSearchQuery("")}
              >
                <img className="h-5 my-2" src={clear} alt="clear" />
              </button>
            )}
          </div>
          <button
            disabled={!searchQuery.trim()}
            onClick={() => {
              navigate("results?search_query=" + searchQuery);
              setSearchQuery("");
            }}
            className="border border-gray-300 border-l-0 py-2 px-6 rounded-r-full bg-gray-100"
          >
            <img className="h-5 " src={search} alt="search" />
          </button>
          <div className="rounded-full bg-gray-100 ml-4">
            <img className="h-5 mt-2 my-1 mx-2" src={mic} alt="search" />
          </div>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute items-center mx-16 bg-white mt-1 py-2 col-span-10 w-[38rem] shadow-lg rounded-xl border-gray-100">
            <ul>
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  onMouseDown={(e) => {
                    console.log("e", e);
                    handleSuggestion(e);
                    setSearchQuery("");
                  }}
                  className="py-1 px-6 text-base font-semibold hover:bg-gray-100"
                >
                  <span className="flex">
                    <img className="h-4 my-2 mr-5" src={search} alt="search" />{" "}
                    {suggestion}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 my-1 dir-rtl">
        <FontAwesomeIcon className="h-8 ml-5" icon={faCircleUser} />
        <img className="h-7 ml-5" src={bell} alt="bell" />
        <img className="h-6 my-1" src={createVideo} alt="video" />
      </div>
    </div>
  );
};

export default Navbar;
