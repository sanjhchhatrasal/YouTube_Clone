// export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
// export const BASE_URL = import.meta.env.VITE_YOUTUBE_BASE_URL
// export const YOUTUBE_VIDEO_API = import.meta.env.VITE_YOUTUBE_VIDEO_API
// export const SEARCH_SUGGESTION_API = import.meta.env.VITE_YOUTUBE_SEARCH_SUGGESTION_API

export const API_KEY = "AIzaSyAEn6cJqf-MWDOqQzOF-n_YsSq9yZzRS6w"
export const BASE_URL = "https://www.googleapis.com/youtube/v3"
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1&regionCode=IN&key=${API_KEY}`
export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
