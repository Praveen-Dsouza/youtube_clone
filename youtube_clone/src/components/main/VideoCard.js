import React from 'react'

const VideoCard = ({ info }) => {
  // console.log(info)
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-48 mx-4 bg-white rounded-md overflow-hidden shadow-md">
    <div className="">
      <img src={thumbnails?.medium?.url} alt={title} className="w-full h-48 object-cover" />
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-12 h-12 text-white opacity-75 hover:opacity-100"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5V19L12 12L20 19V5L12 12L4 5Z"
          />
        </svg>
      </div> */}
    </div>
    <div className="p-4">
      <h2 className="text-sm font-semibold mb-2">{title}</h2>
      <p className="text-sm font-semibold mb-2">{channelTitle}</p>
      <p className="text-gray-600 text-sm">{statistics.viewCount} views</p>
    </div>
  </div>
  )
}

export default VideoCard
