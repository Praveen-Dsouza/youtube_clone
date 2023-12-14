import React from "react";
import { Link } from "react-router-dom";
import VideoShimmer from "./VideoShimmer";
import VideoTimeStamp from "../../searchResults/VideoTimeStamp";

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
      className=" flex flex-row m-2  rounded-xl border border-gray-100"
    >
      <img
        className="w-56  aspect-video rounded-xl"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className="flex flex-col px-2">
        <div className="font-bold line-clamp-2 m-1 ">{title}</div>
        <div className="text-sm line-clamp-1 m-1">{channelTitle}</div>
        <div className="text-sm m-1">
          <VideoTimeStamp utcTimestamp={publishedAt} />
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
