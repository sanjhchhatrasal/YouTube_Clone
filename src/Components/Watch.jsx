import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { LuSendHorizontal } from "react-icons/lu";
import { API_KEY, YOUTUBE_VIDEO_API } from "../Constants/constants";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import Sidevideo from "./Sidevideo";
import LiveChat from "./LiveChat";
import { setMsg } from "../Features/LivechatSlice";
import Comments from "./Comments";

const Watch = () => {
  const sidebar = useSelector((store) => store.sidebar.isSidebarOpen);
  const dispatch = useDispatch();

  const [videoData, setVideoData] = useState("")
  const [input, setInput] = useState("")
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);

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
      // console.log(resData)
      setVideoData(resData?.data?.items[0])
    } catch(err){
      console.log(err)
    }
  }

    useEffect(() => {
      getYoutubeVideo()
    }, [])

    const sendMsg = () => {
      dispatch(setMsg({name: "Sanjh", message: input}));
      setInput("")
    }

    const fetchVideo = async () => {
      try {
        const res = await axios.get(YOUTUBE_VIDEO_API);
        // console.log(res?.data?.items);
        setVideos(res?.data?.items);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchVideo();
    }, []);

    const fetchComments = async() => {
      try{
          const res = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&videoId=${vidId}&maxResults=100`)
          console.log(res?.data?.items)
          setComments(res?.data?.items)
          
      } catch(err){
          console.log(err)
      }
  }
  useEffect(() => {
      fetchComments()
  }, [])

  return (
    <>
      {sidebar ? (
       <>
        <div className="lg:w-[57%] w-full bg-zinc-900 lg:h-[91.3vh] lg:mt-20 mt-8 ml-[18%]">
          <div className="min-h-[90vh] lg:w-[55vw] w-[85%]">
            <div className="lg:h-[65vh] lg:w-[55vw] w-full h-[35vh] rounded-xl bg-zinc-800 overflow-hidden">
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
            <h1 className="lg:text-[1.3rem] text-xs lg:pt-5 pt-3 font-semibold">
              {videoData?.snippet?.title}
            </h1>
            <div className="flex  items-start lg:gap-2 gap-1 lg:pt-3 lg:mt-2 pt-1 lg:w-[53vw]  w-full">
              <div className="flex lg:gap-2 gap-1  lg:w-[18vw] w-[20%] ">
                <div className="lg:h-12 lg:w-12 h-8 w-8 rounded-full overflow-hidden bg-zinc-700">
                    <img className="h-full w-full object-cover" src="https://imgs.search.brave.com/u3FUfiEc_iDQip6_Xv-rOV15GBFN6hsH_zAqDeu9Xig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODE4/MDIxMTgvcGhvdG8v/Y2xvc2V1cC1vZi1p/bWctZm91bmRlci1h/bmQtY2VvLW1hcmst/bWNjb3JtYWNrLWxp/Z29uaWVyLXBhLTgt/MTQtMTk2NS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YUNj/ZExpNjE4b19qSjNC/WjN4VTZyZGN6T25n/NmxmVXZHZlhIUVRx/RC1YST0" alt="" />
                </div>
                <div className="w-[15vw]">
                  <h6 className="lg:text-[1rem] text-[0.5rem] font-semibold">{videoData?.snippet?.channelTitle}</h6>
                  <p className="lg:text-[0.75rem] text-[0.5rem] text-gray-400 font-semibold">
                    22.6k subscribers
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:gap-2 gap-1 lg:w-[10vw]  w-[10%] ">
                <button className="lg:px-4 lg:py-2 p-[0.2rem] lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600">
                  Join
                </button>
                <button className="lg:px-4 lg:py-2 p-[0.2rem] lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-slate-200 hover:bg-slate-300 text-zinc-800">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center lg:gap-2 gap-[0.15rem]  lg:w-[22vw] w-[30%]  lg:ml-14 ml-[3rem]">
                <button className="lg:px-4 lg:py-2 p-1 lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="lg:text-lg text-[0.5rem]">
                    <AiOutlineLike />
                  </span>
                   {videoData?.statistics?.likeCount}
                </button>
                <button className="lg:px-4 lg:py-2 p-1 lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="lg:text-lg text-[0.5rem]">
                    <PiShareFatLight />
                  </span>
                  Share
                </button>
                <button className="lg:px-4 lg:py-2 p-1 lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="lg:text-lg text-[0.5rem]">
                    <LiaDownloadSolid />
                  </span>
                  Download
                </button>
              </div>
            </div>
            <div>
              <div className="lg:p-3 p-1 lg:mt-5 mt-2 rounded-lg bg-zinc-700  min-h-28 mb-4">
               <div className="flex lg:gap-3 gap-1 font-semibold">
               <h6 className="text-xs lg:text-[1rem]">{videoData?.statistics?.viewCount} views</h6>
               <h6 className="text-xs lg:text-[1rem]">{formatDate(videoData?.snippet?.publishedAt)}</h6>
               </div>
               <p className="lg:text-sm text-[0.6rem]">{videoData?.snippet?.description}</p>
              </div>
              
            </div>
            <div className="min-h-[100vh]  lg:mt-3 mt-2 lg:p-5 p-1">
              <h6 className="lg:text-xl text-xs font-semibold">{videoData?.statistics?.commentCount} Comments</h6>
              <div className="lg:mt-4 mt-1 mr-2 lg:mr-0">
              {comments.map((commentItem) => {
                return <Comments item={commentItem} />
              })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-[23%] w-0">
        <div className="w-full h-[75vh] rounded-lg border-[1px] border-zinc-400 mt-20 ml-4 overflow-hidden">
          <div className="w-full h-12 border-b-[1px] border-zinc-400 flex items-center justify-between px-4">
            <h6 className="flex items-center gap-1">Top Chat <span className="text-2xl"><MdKeyboardArrowDown /></span></h6>
            <div className="flex items-center gap-4">
              <span className="text-xl"><BsThreeDotsVertical /></span>
              <span className="text-xl"><RxCross1 /></span>
            </div>
          </div>
          <div className="w-full h-[59vh] overflow-y-auto overflow-x-hidden mb-1 mt-1">
            <LiveChat vidId = {vidId} />
          </div>
          <div className="w-full h-14 border-t-[1px] border-zinc-400 flex items-center gap-4 px-5">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="outline-none w-[85%] bg-zinc-800 rounded-full py-2 px-3 " type="text" placeholder="Chat..." />
            <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center">
              <span className="cursor-pointer" onClick={sendMsg}><LuSendHorizontal /></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 flex-wrap mt-5 w-full ml-4 ">
        {videos.map((item) => <Link to={`/watch?v=${item.id}`} key={item.id}><Sidevideo item={item}/></Link>
       )}
        </div>
        </div>
       </>
        
      ) : (
        <>
        <div className=" lg:w-[63%] lg:h-[91.3vh] w-[100%] bg-zinc-900  lg:mt-20 mt-8 ml-[10%] lg:ml-[8%]">
        <div className="min-h-[90vh]  lg:w-[60vw] w-[92%]">
            <div className="lg:h-[65vh] lg:w-[60vw] h-[35vh] w-full rounded-xl bg-zinc-800 overflow-hidden">
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
            <h1 className="lg:text-[1.3rem] text-xs lg:pt-3 pt-1 font-semibold">
              {videoData?.snippet?.title}
            </h1>
            <div className="flex items-start lg:mt-2 lg:gap-2 gap-1 lg:pt-3 pt-2 lg:w-[55vw] w-full">
              <div className="flex lg:gap-2 gap-1 lg:w-[18vw] w-[25%] ">
                <div className="lg:h-12 lg:w-12 h-8 w-8 rounded-full overflow-hidden bg-zinc-700">
                    <img className="h-full w-full object-cover" src="https://imgs.search.brave.com/u3FUfiEc_iDQip6_Xv-rOV15GBFN6hsH_zAqDeu9Xig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODE4/MDIxMTgvcGhvdG8v/Y2xvc2V1cC1vZi1p/bWctZm91bmRlci1h/bmQtY2VvLW1hcmst/bWNjb3JtYWNrLWxp/Z29uaWVyLXBhLTgt/MTQtMTk2NS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YUNj/ZExpNjE4b19qSjNC/WjN4VTZyZGN6T25n/NmxmVXZHZlhIUVRx/RC1YST0" alt="" />
                </div>
                <div className="w-[15vw]">
                  <h6 className="lg:text-[1rem] text-[0.5rem] font-semibold">{videoData?.snippet?.channelTitle}</h6>
                  <p className="lg:text-xs text-[0.5rem] text-gray-400 font-semibold">
                    22.6k subscribers
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:gap-2 gap-1 lg:w-[10vw] w-[12%] ">
                <button className="lg:px-4 lg:py-2 p-[0.2rem] lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600">
                  Join
                </button>
                <button className="lg:px-4 lg:py-2 p-[0.2rem] lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-slate-200 hover:bg-slate-300 text-zinc-800">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center lg:gap-2 gap-[0.15rem] lg:w-[22vw] w-[30%]  lg:ml-20 ml-[3.3rem]">
                <button className="lg:px-4 lg:py-2 p-1 lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="lg:text-lg text-[0.5rem]">
                    <AiOutlineLike />
                  </span>
                   {videoData?.statistics?.likeCount}
                </button>
                <button className="lg:px-4 lg:py-2 p-1 lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="lg:text-lg text-[0.5rem]">
                    <PiShareFatLight />
                  </span>
                  Share
                </button>
                <button className="lg:px-4 lg:py-2 p-1 lg:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="lg:text-lg text-[0.5rem]">
                    <LiaDownloadSolid />
                  </span>
                  Download
                </button>
              </div>
            </div>
            <div>
              <div className="lg:p-3 p-1 lg:mt-5 mt-2 rounded-lg bg-zinc-700  min-h-28 lg:mb-4 mb-1">
               <div className="flex lg:gap-3 gap-1 font-semibold">
               <h6 className="text-xs lg:text-[1rem]">{videoData?.statistics?.viewCount} views</h6>
               <h6 className="text-xs lg:text-[1rem]">{formatDate(videoData?.snippet?.publishedAt)}</h6>
               </div>
               <p className="lg:text-sm text-[0.6rem]">{videoData?.snippet?.description}</p>
              </div>
              
            </div>
            <div className="min-h-[100vh] lg:mt-3 mt-2 lg:p-5 p-1 ">
              <h6 className="lg:text-xl text-xs font-semibold">{videoData?.statistics?.commentCount} Comments</h6>
              <div className="lg:mt-4 mt-1 mr-2 lg:mr-0">
              {comments.map((commentItem) => {
                return <Comments item={commentItem} />
              })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  lg:w-[25%] w-0">
        <div className="w-full h-[75vh] rounded-lg border-[1px] border-zinc-400 mt-20 ml-4 overflow-hidden">
          <div className="w-full h-12 border-b-[1px] border-zinc-400 flex items-center justify-between px-4">
            <h6 className="flex items-center gap-1">Top Chat <span className="text-2xl"><MdKeyboardArrowDown /></span></h6>
            <div className="flex items-center gap-4">
              <span className="text-xl"><BsThreeDotsVertical /></span>
              <span className="text-xl"><RxCross1 /></span>
            </div>
          </div>
          <div className="w-full h-[59vh] overflow-y-auto overflow-x-hidden mb-1 mt-1">
            <LiveChat vidId = {vidId} />
          </div>
          <div className="w-full h-14 border-t-[1px] border-zinc-400 flex items-center gap-4 px-5">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="outline-none w-[85%] bg-zinc-800 rounded-full py-2 px-3 " type="text" placeholder="Chat..." />
            <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center">
              <span className="cursor-pointer" onClick={sendMsg}><LuSendHorizontal /></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 flex-wrap mt-5 w-full ml-4 ">
        {videos.map((item) => <Link to={`/watch?v=${item.id}`} key={item.id}><Sidevideo item={item}/></Link>
       )}
        </div>
        </div>
        </>
      )}
    </>
  );
};

export default Watch;
