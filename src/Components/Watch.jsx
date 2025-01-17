import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { API_KEY, YOUTUBE_VIDEO_API } from "../Constants/constants";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import Sidevideo from "./Sidevideo";

const Watch = () => {
  const sidebar = useSelector((store) => store.sidebar.isSidebarOpen);

  const [videoData, setVideoData] = useState("")

  const [searchParams] = useSearchParams();
  const vidId = searchParams.get('v');
  console.log("vid id=", vidId)

  const formatDate = (timestamp) => {
    if (!timestamp) return ""; // Handle case where timestamp is undefined or null
  
    const date = new Date(timestamp); // Convert timestamp to Date object
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  


  const getYoutubeVideo = async() => {
    try{
      const resData = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidId}&key=${API_KEY}`)
      console.log(resData)
      setVideoData(resData?.data?.items[0])
    } catch(err){
      console.log(err)
    }
  }

    useEffect(() => {
      getYoutubeVideo()
    }, [])

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
    <>
      {sidebar ? (
       <>
        <div className=" w-[60%] bg-zinc-900 h-[91.3vh]  mt-20 ml-[17.5%]">
          <div className="min-h-[90vh] w-[55vw]">
            <div className="h-[65vh] w-[55vw] rounded-xl bg-zinc-800 overflow-hidden">
               <iframe
            className="h-full w-full object-cover"
            src={`https://www.youtube.com/embed/${vidId}?autoplay=1`}
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrepolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
            </div>
            <h1 className="text-[1.3rem] pt-3 font-semibold">
              {videoData?.snippet?.title}
            </h1>
            <div className="flex items-start gap-2 pt-3 w-[55vw]">
              <div className="flex gap-2 w-[18vw]">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-700">
                    <img className="h-full w-full object-cover" src="https://imgs.search.brave.com/u3FUfiEc_iDQip6_Xv-rOV15GBFN6hsH_zAqDeu9Xig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODE4/MDIxMTgvcGhvdG8v/Y2xvc2V1cC1vZi1p/bWctZm91bmRlci1h/bmQtY2VvLW1hcmst/bWNjb3JtYWNrLWxp/Z29uaWVyLXBhLTgt/MTQtMTk2NS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YUNj/ZExpNjE4b19qSjNC/WjN4VTZyZGN6T25n/NmxmVXZHZlhIUVRx/RC1YST0" alt="" />
                </div>
                <div className="w-[15vw]">
                  <h6 className="text-lg font-semibold">{videoData?.snippet?.channelTitle}</h6>
                  <p className="text-sm text-gray-400 font-semibold">
                    22.6k subscribers
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-[10vw]">
                <button className="px-4 py-2 rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600">
                  Join
                </button>
                <button className="px-4 py-2 rounded-full font-semibold bg-slate-200 hover:bg-slate-300 text-zinc-800">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-2 w-[22vw] ml-16">
                <button className="px-4 py-2 rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="text-lg">
                    <AiOutlineLike />
                  </span>
                   {videoData?.statistics?.likeCount}
                </button>
                <button className="px-4 py-2 rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="text-lg">
                    <PiShareFatLight />
                  </span>
                  Share
                </button>
                <button className="px-4 py-2 rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="text-lg">
                    <LiaDownloadSolid />
                  </span>
                  Download
                </button>
              </div>
            </div>
            <div>
              <div className="p-3 mt-5 rounded-lg bg-zinc-800 min-h-28 mb-4">
               <div className="flex gap-3 font-semibold">
               <h6>{videoData?.statistics?.viewCount} views</h6>
               <h6>{formatDate(videoData?.snippet?.publishedAt)}</h6>
               </div>
               <p className="text-sm">{videoData?.snippet?.description}</p>
              </div>
              
            </div>
            <div className="min-h-32 mt-3">
              <h6 className="text-xl font-semibold">{videoData?.statistics?.commentCount} Comments</h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 flex-wrap mt-20 w-[26%] ml-4">
        {videos.map((item) => <Link to={`/watch?v=${item.id}`} key={item.id}><Sidevideo item={item}/></Link>
       )}
        </div>
       </>
        
      ) : (
        <>
        <div className="scrollbar scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 overflow-y-scroll w-[100%] h-[91.3vh] bg-zinc-900  mt-20 ml-[10%]">
        <div className="min-h-[90vh] w-[55vw]">
            <div className="h-[65vh] w-[55vw] rounded-xl bg-zinc-800 overflow-hidden">
               <iframe
            className="h-full w-full object-cover"
            src={`https://www.youtube.com/embed/${vidId}?autoplay=1`}
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrepolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
            </div>
            <h1 className="text-[1.3rem] pt-3 font-semibold">
              {videoData?.snippet?.title}
            </h1>
            <div className="flex items-start gap-2 pt-3 w-[55vw]">
              <div className="flex gap-2 w-[18vw]">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-700">
                    <img className="h-full w-full object-cover" src="https://imgs.search.brave.com/u3FUfiEc_iDQip6_Xv-rOV15GBFN6hsH_zAqDeu9Xig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODE4/MDIxMTgvcGhvdG8v/Y2xvc2V1cC1vZi1p/bWctZm91bmRlci1h/bmQtY2VvLW1hcmst/bWNjb3JtYWNrLWxp/Z29uaWVyLXBhLTgt/MTQtMTk2NS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YUNj/ZExpNjE4b19qSjNC/WjN4VTZyZGN6T25n/NmxmVXZHZlhIUVRx/RC1YST0" alt="" />
                </div>
                <div className="w-[15vw]">
                  <h6 className="text-lg font-semibold">{videoData?.snippet?.channelTitle}</h6>
                  <p className="text-sm text-gray-400 font-semibold">
                    22.6k subscribers
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-[10vw]">
                <button className="px-4 py-2 rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600">
                  Join
                </button>
                <button className="px-4 py-2 rounded-full font-semibold bg-slate-200 hover:bg-slate-300 text-zinc-800">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-2 w-[22vw] ml-16">
                <button className="px-4 py-2 rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="text-lg">
                    <AiOutlineLike />
                  </span>
                   {videoData?.statistics?.likeCount}
                </button>
                <button className="px-4 py-2 rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="text-lg">
                    <PiShareFatLight />
                  </span>
                  Share
                </button>
                <button className="px-4 py-2 rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="text-lg">
                    <LiaDownloadSolid />
                  </span>
                  Download
                </button>
              </div>
            </div>
            <div>
              <div className="p-3 mt-5 rounded-lg bg-zinc-800 min-h-28 mb-4">
               <div className="flex gap-3 font-semibold">
               <h6>{videoData?.statistics?.viewCount} views</h6>
               <h6>{formatDate(videoData?.snippet?.publishedAt)}</h6>
               </div>
               <p className="text-sm">{videoData?.snippet?.description}</p>
              </div>
              
            </div>
            <div className="min-h-32 mt-3">
              <h6 className="text-xl font-semibold">{videoData?.statistics?.commentCount} Comments</h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 flex-wrap mt-20 w-[26%] ml-4">
        {videos.map((item) => <Link to={`/watch?v=${item.id}`} key={item.id}><Sidevideo item={item}/></Link>
       )}
        </div>
        </>
      )}
    </>
  );
};

export default Watch;
