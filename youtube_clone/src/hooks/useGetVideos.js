import { useEffect } from "react";
import { YT_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/storeSlices/videoSlice";

const useGetVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videos);

  useEffect(() => {
    if (!videos.length) getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    dispatch(addVideos(json?.items));
  };
};

export default useGetVideos;
