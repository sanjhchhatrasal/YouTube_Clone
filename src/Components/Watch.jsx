import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { API_KEY } from "../Constants/constants";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Watch = () => {
  const sidebar = useSelector((store) => store.sidebar.isSidebarOpen);

  const [videoData, setVideoData] = useState("")

  const [searchParams] = useSearchParams();
  const vidId = searchParams.get('v');
  console.log("vid id=", vidId)


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

  return (
    <>
      {sidebar ? (
        <div className="scrollbar scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 overflow-y-scroll w-[83%] bg-zinc-900 h-[91.3vh]  mt-20 ml-[18%]">
          <div className="h-[85vh] w-[55vw]">
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
          </div>
        </div>
      ) : (
        <div className="scrollbar scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 overflow-y-scroll w-[100%] h-[91.3vh] bg-zinc-900  mt-20 ml-[10%]">
          <div className="h-[85vh] w-[55vw]">
            <div className="h-[65vh] w-[55vw] rounded-xl bg-zinc-800 overflow-hidden">
               <iframe
            className="h-full w-full object-cover"
            src={`https://www.youtube.com/embed/${vidId}?si=Rs1s0VlC8nqqqcpG`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
            </div>
            <h1 className="text-[1.3rem] font-semibold">
              Build & Deploy YouTube Clone | ReactJS + Redux + Tailwind
            </h1>
            <div className="flex items-start gap-2 pt-3 w-[55vw]">
              <div className="flex gap-2 w-[18vw]">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-700">
                    <img className="h-full w-full object-cover" src="https://imgs.search.brave.com/u3FUfiEc_iDQip6_Xv-rOV15GBFN6hsH_zAqDeu9Xig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODE4/MDIxMTgvcGhvdG8v/Y2xvc2V1cC1vZi1p/bWctZm91bmRlci1h/bmQtY2VvLW1hcmst/bWNjb3JtYWNrLWxp/Z29uaWVyLXBhLTgt/MTQtMTk2NS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YUNj/ZExpNjE4b19qSjNC/WjN4VTZyZGN6T25n/NmxmVXZHZlhIUVRx/RC1YST0" alt="" />
                </div>
                <div className="w-[15vw]">
                  <h6 className="text-lg font-semibold">Channel name name</h6>
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
                  Like
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
          </div>
        </div>
      )}
    </>
  );
};

export default Watch;
