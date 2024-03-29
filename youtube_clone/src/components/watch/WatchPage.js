import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/storeSlices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./videoComments/CommentsContainer";
import LiveChat from "./liveChat/LiveChat";
import VideoDetails from "./VideoDetails";
import RecommendedVideos from "./recommended/RecommendedVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex mt-6 flex-col min-w-[15px] items-center max-w-[calc(1280px + 402px + 72px)] mx-[calc(7%)]">
      <div className="px-3 flex">
        <div className="w-7/12 mr-4">
          <div className="w-full h-[360px]">
            <iframe
              className="rounded-xl aspect-video w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <VideoDetails videoId={videoId} />
          <CommentsContainer videoId={videoId} />
        </div>
        <div className="w-5/12">
          <LiveChat />
          <RecommendedVideos />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
