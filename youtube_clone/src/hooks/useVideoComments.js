import { useEffect } from 'react'
import { VIDEO_COMMENTS_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addVideoComments } from '../utils/storeSlices/videoSlice';

const useVideoComments = (videoId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (videoId)
            getVideoComments();
    }, [videoId]);
    
    const getVideoComments = async () => {
        const data = await fetch(VIDEO_COMMENTS_API + videoId);
        const json = await data.json();
        dispatch(addVideoComments(json?.items));
    };
}

export default useVideoComments
