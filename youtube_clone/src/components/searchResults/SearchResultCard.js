import React, { useEffect, useState } from "react";
import { CHANNEL_DATA_API } from "../../utils/constants";
import VideoTimeStamp from "./VideoTimeStamp";
import verified from "../../utils/icons/watch/verified.png"
import { ViewsConverter, dateToViews } from "../../utils/helper";

const SearchResultCard = ({ video }) => {
    const [channelDetails, setChannelDetails] = useState(null);
    const { channelId, channelTitle, description, publishedAt, title, thumbnails } = video?.snippet

    useEffect(() => {
      getChannelData();
    }, []);

     // Getting Channel Data with Channel Id
  const getChannelData = async () => {
    const data = await fetch(CHANNEL_DATA_API + channelId);
    const json = await data.json();
    setChannelDetails(json);
  };

  if (channelDetails == null) return;

  const channelLogoImg =
    channelDetails?.items[0].snippet?.thumbnails?.high?.url || {};
  return (
    <div className="flex py-2">
      <div className="flex">
        <img
          className="rounded-xl h-52 object-cover"
          src={thumbnails?.medium?.url}
          alt=""
        />
        <div className="pl-4">
          <div className="font-semibold text-lg">{title}</div>
          <div className='text-gray-600 text-xs font-base flex'>
            <p className='flex'><ViewsConverter views={dateToViews(publishedAt)} /> &nbsp;views</p>&nbsp;
            <p className='mx-1 leading-0'>•</p>
            <p><VideoTimeStamp utcTimeStamp={publishedAt}/></p>
          </div>
          <div className='flex'>
            <img className="w-6 my-2 rounded-full mr-2" src={channelLogoImg} alt="channel_logo" />
            <div className="flex my-2 py-[2px]">
              <p className="text-gray-500 text-xs font-medium  mr-2">{channelTitle}</p>
              <img className="h-3 w-3 my-1" src={verified} alt="verified" />
            </div>
          </div>        
          <h2 className="text-gray-600 text-sm line-clamp-1">{description}</h2>
        </div>
      </div>
    </div>
  )
}

export default SearchResultCard
