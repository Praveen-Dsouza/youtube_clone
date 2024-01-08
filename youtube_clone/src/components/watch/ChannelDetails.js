import React from "react";
import { ViewsConverter } from "../../utils/helper";
import verified from "../../utils/icons/watch/verified.png";
import { useSelector } from "react-redux";

const ChannelDetails = ({ channelTitle }) => {
  const channelDetails = useSelector((store) => store.video.channelDetails);
  const { snippet, statistics } = channelDetails;
  
  if (!channelDetails) return;

  const channelLogoImg = snippet?.thumbnails?.default?.url;
  const subscriberCount = statistics?.subscriberCount;

  return (
    <div className="flex mt-1 w-full">
      <img
        className="w-10 h-10 mr-2 rounded-full"
        src={channelLogoImg}
        alt="logo"
      />
      <div className=" flex flex-col">
        <p className="font-bold text-[15px] mb-1 line-clamp-2">{channelTitle}</p>
        <div className="flex text-xs">
          <ViewsConverter views={subscriberCount} />
          <p className="pl-1"> subscribers</p>
        </div>
      </div>
      <div className="px-2 py-1">
        <img className="h-4 w-4 " src={verified} alt="verified" />
      </div>
      <button className="px-5 py-2 ml-4 rounded-3xl text-sm bg-black text-white font-semibold">
        Subscribe
      </button>
    </div>
  );
};

export default ChannelDetails;
