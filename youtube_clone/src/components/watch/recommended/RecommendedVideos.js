import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoShimmer from "./VideoShimmer";
import { RECOMMENDED_VIDEOS_API } from "../../../utils/constants";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  const channelId = useSelector((store) => store.video.channelId);
  const [recommendedVideos, setRecommendedVideos] = useState(null);

  const fetchVideoRecommendations = async () => {
    const data = await fetch(RECOMMENDED_VIDEOS_API + channelId);
    const json = await data.json();
    setRecommendedVideos(json?.items);
  };

  useEffect(() => {
    if (channelId) {
      fetchVideoRecommendations();
    }
  }, [channelId]);

  if (!recommendedVideos) return <VideoShimmer/>

  return (
    <div>
      {recommendedVideos?.map((recommendedVideo, index) =>
        recommendedVideo?.contentDetails?.subscription ? null : (
          <div key={index}>
            <VideoCard recommendationVideo={recommendedVideo} />
          </div>
        )
      )}
    </div>
  );
};

export default RecommendedVideos;
