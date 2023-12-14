import React, { useEffect, useState } from "react";
import { CHANNEL_DATA_API } from "../../utils/constants";
import { ViewsConverter } from "../../utils/helper";
import verified from "../../utils/icons/verified.png"

const ChannelDetails = ({ channelId, channelTitle }) => {
  const [channelDetails, setChannelDetails] = useState(null);

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
