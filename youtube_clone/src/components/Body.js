import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import ButtonList from "./main/ButtonList";

const Body = () => {
  const location = useLocation();

  return (
    <div className="flex">
      <Sidebar />
      {location.pathname === '/' && <div className="mt-14 mx-[calc(2%)]">
        <ButtonList/>
      </div>}
      <div className="mt-14">
        <Outlet/>
      </div>
    </div>
  );
};

export default Body;
