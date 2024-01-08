import React from "react";
import { Link } from "react-router-dom";
import VideoShimmer from "./VideoShimmer";
import VideoTimeStamp from "../../searchResults/VideoTimeStamp";
import verified from "../../../utils/icons/watch/verified.png"
import { ViewsConverter, dateToViews } from "../../../utils/helper";

const VideoCard = ({ recommendationVideo }) => {
  if (recommendationVideo == null) return <VideoShimmer />;

  const { channelTitle, publishedAt, thumbnails, title } =
    recommendationVideo?.snippet || {};

  const { videoId } =
    recommendationVideo?.contentDetails?.upload ||
    recommendationVideo?.contentDetails?.playlistItem?.resourceId ||
    {};
  return (
    <Link
      to={"/watch?v=" + videoId}
      className=" flex flex-row m-2 rounded-xl border border-gray-100"
    >
      <img
        className="w-44 h-24 aspect-video rounded-lg"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className="flex text-sm flex-col pl-2">
        <div className="font-bold line-clamp-2 mb-2">{title}</div>
        <div className='flex'>
          <p className="text-gray-600 text-xs font-base mr-2">{channelTitle}</p>
          <img className="h-3 w-3 my-1" src={verified} alt="verified" />
        </div>        
        <div className='text-gray-600 text-xs flex'>
          <p className='flex'><ViewsConverter views={dateToViews(publishedAt)} /> &nbsp;views</p>&nbsp;
          <p className='mx-1 leading-0'>•</p>
          <p><VideoTimeStamp utcTimeStamp={publishedAt}/></p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
