import React, { useEffect, useState } from 'react'
import { YT_VIDEOS_API } from '../../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_API);
    const json = await data.json();
    await setVideos(json.items);
  }

  return (
    <div>
      <VideoCard info={videos[0]}/>
    </div>
  )
}

export default VideoContainer
