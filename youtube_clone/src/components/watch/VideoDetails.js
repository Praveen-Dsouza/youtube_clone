import React from "react";
import { useSelector } from "react-redux";
import ChannelDetails from "./ChannelDetails";
import useVideoDetails from "../../hooks/useVideoDetails";
import useChannelDetails from "../../hooks/useChannelDetails";
import likedInv from "../../utils/icons/sidebar/likedInv.png";
import dislikedInv from "../../utils/icons/watch/dislikedInv.png";
import share from "../../utils/icons/watch/share.png";
import more from "../../utils/icons/watch/more.png";
import { ViewsConverter } from "../../utils/helper";
import VideoTimeStamp from "../searchResults/VideoTimeStamp"

const VideoDetails = ({ videoId }) => {
  useVideoDetails(videoId);
  useChannelDetails();
  const videoDetails = useSelector((store) => store.video?.details);

  const { title, channelTitle, description, publishedAt } =
    videoDetails?.snippet || {};

  const { likeCount, viewCount } = videoDetails?.statistics || {};

  if (videoDetails === null) return;

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <div className="font-bold text-xl py-2 my-2">{title}</div>
      </div>
      <div className="flex justify-between">
        <ChannelDetails channelTitle={channelTitle} />

        <div className="flex items-center px-2">
          <div className="flex items-center bg-slate-100 px-4 py-1 mx-2 rounded-3xl w-48 ">
            
            <img className="h-6 w-18 bg-gray-200 " src={likedInv} alt="like"/>
            <div className="text-sm mx-2 font-semibold mt-1">
              <ViewsConverter views={likeCount} />
            </div>
            <div className="text-xl text-gray-300 mx-2">|</div>
            <img className="h-6 w-18 bg-gray-100" src={dislikedInv} alt="dislike"/>
          </div>
          <div className="bg-slate-100 rounded-3xl px-4 py-3 mx-2 flex ">
            <img className="h-5 w-18 bg-gray-100 px-1" src={share} alt="share"/>
            <span className="text-sm font-semibold pr-2">Share</span>
          </div>
          <div className="bg-slate-100 rounded-full p-2 py-5">
            <img className="w-8 rounded-full px-1" src={more} alt="more"/>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 m-3 rounded-xl">
        <div className="flex m-1 mb-0 mt-3 text-base w-full">
          <div className="flex font-bold px-2">
            <ViewsConverter views={viewCount} />
            <p className="px-1">views</p>&nbsp;
            <VideoTimeStamp utcTimestamp={publishedAt} />
          </div>
        </div>
        <div className="m-1 mt-0 mb-3">
          <div className="text-sm line-clamp-2 px-2">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
