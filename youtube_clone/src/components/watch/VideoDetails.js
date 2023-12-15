import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChannelDetails from "./ChannelDetails";
import { setChannnelId } from "../../utils/storeSlices/videoSlice";
import useVideoDetails from "../../hooks/useVideoDetails";

const VideoDetails = ({ videoId }) => {
  useVideoDetails(videoId);
  const dispatch = useDispatch();
  const videoDetails = useSelector((store) => store.video?.details);

  useEffect(() => {
    if (videoDetails) {
      const { channelId } = videoDetails.snippet || {};
      dispatch(setChannnelId(channelId));
    }
  }, [videoDetails, dispatch]);

  const { channelId, title, channelTitle, description, publishedAt } =
    videoDetails?.snippet || {};
  const { likeCount, viewCount } = videoDetails?.statistics || {};

  if (videoDetails == null) return;

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <div className="font-bold text-xl py-2 m-2">{title}</div>
      </div>
      <div className="flex justify-between">
        <ChannelDetails channelId={channelId} channelTitle={channelTitle} />
      </div>
    </div>
  );
};

export default VideoDetails;
