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
      <div className={`mt-14 ${isMenuOpen && ' bg-gray-200 absolute inset-0 pointer-events-none'}`}>
        <div className={`${isMenuOpen && 'hidden'}`}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Body;
