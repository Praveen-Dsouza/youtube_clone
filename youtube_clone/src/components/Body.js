import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./main/MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
