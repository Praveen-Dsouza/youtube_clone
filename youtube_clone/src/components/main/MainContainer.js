import React from "react";
import VideoContainer from "./VideoContainer";
import { useLocation } from "react-router-dom"
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const location = useLocation();

  return (
    <div className="mx-[calc(2%)]">
      {location.pathname === '/' && <div className="">
        <ButtonList/>
      </div>}    
      <div className="pt-20">
        <VideoContainer />
        </div>  
    </div>
  );
};

export default MainContainer;
