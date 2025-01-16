import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../Constants/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      console.log(res?.data?.items);
      setVideos(res?.data?.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div className="text-4xl flex flex-wrap gap-5 min-h-[100vh] ">
      {videos.map((item) => {
        return (
          <Link to={`/watch?v=${item.id}`} key={item.id}>
            <VideoCard  item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default Videos;
