import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-md overflow-hidden shadow-md">
      <div className="aspect-w-16 aspect-h-9">
        <img src={thumbnails.medium.url} alt="thumbnail" className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{channelTitle}</p>
        <p className="text-sm text-gray-500">{statistics.viewCount}</p>
      </div>
    </div>
  )
}

export default VideoCard
