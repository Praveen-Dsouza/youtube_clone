const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 200;

export const YT_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY

export const YT_LOGO = "https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"

export const YT_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YT_SEARCH_RESULTS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" + API_KEY + "&q=";

export const CHANNEL_DATA_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY + "&id=";

export const VIDEO_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY + "&id=";

export const RECOMMENDED_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=50&key=" + API_KEY + "&channelId=";

export const VIDEO_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&&key=" + API_KEY + "&videoId=";