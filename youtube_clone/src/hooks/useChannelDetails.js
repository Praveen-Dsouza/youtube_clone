import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addChannelDetails } from "../utils/storeSlices/videoSlice";
import { CHANNEL_DATA_API } from "../utils/constants";

const useChannelDetails = (channelId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getChannelData();
  }, []);

  const getChannelData = async () => {
    const data = await fetch(CHANNEL_DATA_API + channelId);
    const json = await data.json();
    dispatch(addChannelDetails(json));
  };
};

export default useChannelDetails;
