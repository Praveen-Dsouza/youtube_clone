import React from 'react'
import verified from "../../utils/icons/watch/verified.png"
import { ViewsConverter } from '../../utils/helper';
import VideoTimeStamp from '../searchResults/VideoTimeStamp';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="min-w-[300px] max-w-[500px] mx-2 bg-white overflow-hidden">
    <div className="">
      <img src={thumbnails?.medium?.url} alt={title} className="w-full rounded-xl object-cover" />
    </div>
    <div className="px-4 py-2">
      <h2 className="text-base font-semibold mb-2 line-clamp-2">{title}</h2>
      <div className='flex'>
        <p className="text-gray-600 text-sm font-base mr-2">{channelTitle}</p>
        <img className="h-4 w-4 my-1" src={verified} alt="verified" />
      </div>
      <div className='text-gray-600 text-sm flex'>
        <p className='flex'><ViewsConverter views={statistics.viewCount}/> &nbsp;views</p>&nbsp;
        <p className='mx-1 leading-0'>•</p>
        <p><VideoTimeStamp utcTimeStamp={publishedAt}/></p>
      </div>
    </div>
  </div>
  )
}

export default VideoCard
