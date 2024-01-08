import React from 'react'

const Comment = ({ data }) => {
    const { authorDisplayName, authorProfileImageUrl, textOriginal } = data?.snippet?.topLevelComment?.snippet || {};

    return (
        <div className="flex py-2 my-2">
            <img
                className="w-10 h-10 rounded-full"
                src={authorProfileImageUrl}
                alt="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="px-3">
                <p className="font-semibold text-sm">{authorDisplayName}</p>
                <p className='text-base'>{textOriginal}</p>
            </div>
        </div>
    );
}

export default Comment
