const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YT_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY

export const YT_LOGO = "https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"

export const YT_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
