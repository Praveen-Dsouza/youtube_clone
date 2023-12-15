import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChannelDetails } from "../utils/storeSlices/videoSlice";
import { CHANNEL_DATA_API } from "../utils/constants";

const useChannelDetails = () => {
  const dispatch = useDispatch();
  const channelId = useSelector((store) => store.video.channelId);

  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(CHANNEL_DATA_API + channelId);
    const json = await data.json();
    console.log('items', json?.items[0])
    dispatch(addChannelDetails(json?.items[0]));
  };
};

export default useChannelDetails;
