import React, { useEffect } from "react";
import axios from "axios";
import { API_KEY, YOUTUBE_VIDEO_API } from "../Constants/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../Features/SidebarSlice";

const Videos = () => {
  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch()
  const {videos, category} = useSelector((store) => store.sidebar)

  const fetchVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      console.log(res?.data?.items);
      // setVideos(res?.data?.items);
      dispatch(setHomeVideo(res?.data?.items))
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSearchVideo = async () => {
    try{
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${category}&type=video&key=${API_KEY}`)
      console.log(res?.data)
      dispatch(setHomeVideo(res?.data?.items))
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    if(category == "All"){
      fetchVideo();
    } else{
      fetchSearchVideo();
    }  
  }, [category]);

  return (
    <div className="lg:text-4xl flex flex-wrap lg:gap-5 md:gap-3 gap-1 lg:mt-0 sm:mt-1 mt-2  min-h-[100vh] ">
      {videos.map((item) => {
        return (
          <Link to={`/watch?v=${typeof item.id === "object" ? item.id.videoId : item.id }`} key={typeof item.id === "object" ? item.id.videoId : item.id }>
            <VideoCard  item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default Videos;
