import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);

  // if (!isMenuOpen) return null;

  return (
    <div className="flex">
      <Sidebar />
      <div className={`mt-14 ${isMenuOpen && 'opacity-1 bg-gray-200'}`}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Body;
