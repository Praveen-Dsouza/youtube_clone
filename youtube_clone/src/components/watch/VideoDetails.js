import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { VIDEO_DETAILS_API } from '../../utils/constants';
import ChannelDetails from './ChannelDetails';

const VideoDetails = ({ videoId }) => {
    const dispatch = useDispatch();
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        fetchVideoDetails();
    }, [videoId])

    const fetchVideoDetails = async () => {
        const data = await fetch(VIDEO_DETAILS_API + videoId);
        const json = await data.json();
        // console.log(json?.items[0]);
        setVideoDetails(json?.items[0]);
      };

    const { channelId, title, channelTitle, description, publishedAt } = videoDetails?.snippet || {};
    const { likeCount, viewCount } = videoDetails?.statistics || {};

    if (videoDetails == null) return;

  return (
    <div className='flex flex-col w-full'>
       <div className="flex">
        <div className="font-bold text-xl py-2 m-2">{title}</div>
      </div>
      <div className="flex justify-between">
        <ChannelDetails channelId={channelId} channelTitle={channelTitle}/>
        </div>
    </div>
  )
}

export default VideoDetails
