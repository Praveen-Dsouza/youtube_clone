import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChannelDetails } from "../utils/storeSlices/videoSlice";
import { CHANNEL_DATA_API } from "../utils/constants";

const useChannelDetails = () => {
  const dispatch = useDispatch();
  const channelId = useSelector((store) => store.video.channelId);

  useEffect(() => {
    if (channelId)
      getChannelDetails();
  }, [channelId]);

  const getChannelDetails = async () => {
    const data = await fetch(CHANNEL_DATA_API + channelId);
    const json = await data.json();
    dispatch(addChannelDetails(json?.items[0]));
  };
};

export default useChannelDetails;
