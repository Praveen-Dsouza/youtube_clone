import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer";
import { useSelector } from "react-redux";
import useVideosList from "../../hooks/useVideosList";

const VideoContainer = () => {
  useVideosList();

  const videos = useSelector((store) => store.video.videos);

  if (!videos?.length) return <Shimmer />;

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
