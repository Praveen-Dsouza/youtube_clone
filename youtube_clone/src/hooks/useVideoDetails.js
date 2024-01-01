import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoDetails, setChannnelId } from "../utils/storeSlices/videoSlice";
import { VIDEO_DETAILS_API } from "../utils/constants";

const useVideoDetails = (videoId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_API + videoId);
    const json = await data.json();
    dispatch(addVideoDetails(json.items[0]));
    dispatch(setChannnelId(json.items[0].snippet.channelId));
  };
};

export default useVideoDetails;
