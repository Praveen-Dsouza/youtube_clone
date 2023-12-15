import React from "react";
import { ViewsConverter } from "../../utils/helper";
import verified from "../../utils/icons/verified.png"
import { useSelector } from "react-redux";
import useChannelDetails from "../../hooks/useChannelDetails";

const ChannelDetails = ({ channelId, channelTitle }) => {
  useChannelDetails(channelId)
  const channelDetails = useSelector((store) => store.video.channelDetails);

  if (!channelDetails) return;

  const channelLogoImg =
    channelDetails?.items[0]?.snippet?.thumbnails?.default?.url;

  const subscriberCount = channelDetails?.items[0]?.statistics?.subscriberCount;

  return (
    <div className="flex p-2 w-full">
      <img
        className="w-10 h-10 mx-2 rounded-full"
        src={channelLogoImg}
        alt="logo"
      />
      <div className=" flex flex-col">
        <p className="font-bold text-base">{channelTitle}</p>
        <div className="flex text-xs">
          <ViewsConverter views={subscriberCount} />
          <p className="pl-1"> subscribers</p>
        </div>
      </div>
      <div className="px-2 py-1">
        <img className="h-4 w-4 " src={verified} alt="verified"/>
      </div>
      <button className="px-6 ml-4 rounded-3xl text-base bg-black txt text-white font-semibold leading-3">
        Subscribe
      </button>
    </div>
  );
};

export default ChannelDetails;
