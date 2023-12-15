import React from "react";
import { useSelector } from "react-redux";
import ChannelDetails from "./ChannelDetails";
import useVideoDetails from "../../hooks/useVideoDetails";

const VideoDetails = ({ videoId }) => {
  useVideoDetails(videoId);
  const videoDetails = useSelector((store) => store.video?.details);

  const { title, channelTitle, description, publishedAt } =
    videoDetails?.snippet || {};
  const { likeCount, viewCount } = videoDetails?.statistics || {};

  if (videoDetails == null) return;

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <div className="font-bold text-xl py-2 m-2">{title}</div>
      </div>
      <div className="flex justify-between">
        <ChannelDetails channelTitle={channelTitle} />
      </div>
    </div>
  );
};

export default VideoDetails;
