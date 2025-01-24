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
          // console.log(res?.data?.items)
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
        <div className="md:w-[57%] w-full bg-zinc-900 md:h-[91.3vh] md:mt-20 mt-8 ml-[18%]">
          <div className="min-h-[90vh] md:w-[55vw] w-[85%]">
            <div className="md:h-[65vh] md:w-[55vw] w-full h-[35vh] rounded-xl bg-zinc-800 overflow-hidden">
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
            <h1 className="md:text-[1.3rem] text-xs md:pt-5 pt-3 font-semibold">
              {videoData?.snippet?.title}
            </h1>
            <div className="flex  items-start md:gap-2 gap-1 md:pt-3 md:mt-2 pt-1 md:w-[53vw]  w-full">
              <div className="flex md:gap-2 gap-1  md:w-[18vw] w-[20%] ">
                <div className="md:h-12 md:w-12 h-8 w-8 rounded-full overflow-hidden bg-zinc-700">
                    <img className="h-full w-full object-cover" src="https://imgs.search.brave.com/u3FUfiEc_iDQip6_Xv-rOV15GBFN6hsH_zAqDeu9Xig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODE4/MDIxMTgvcGhvdG8v/Y2xvc2V1cC1vZi1p/bWctZm91bmRlci1h/bmQtY2VvLW1hcmst/bWNjb3JtYWNrLWxp/Z29uaWVyLXBhLTgt/MTQtMTk2NS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YUNj/ZExpNjE4b19qSjNC/WjN4VTZyZGN6T25n/NmxmVXZHZlhIUVRx/RC1YST0" alt="" />
                </div>
                <div className="w-[15vw]">
                  <h6 className="md:text-[1rem] text-[0.5rem] font-semibold">{videoData?.snippet?.channelTitle}</h6>
                  <p className="md:text-[0.75rem] text-[0.5rem] text-gray-400 font-semibold">
                    22.6k subscribers
                  </p>
                </div>
              </div>
              <div className="flex items-center md:gap-2 gap-1 md:w-[10vw]  w-[10%] ">
                <button className="md:px-4 md:py-2 p-[0.2rem] md:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600">
                  Join
                </button>
                <button className="md:px-4 md:py-2 p-[0.2rem] md:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-slate-200 hover:bg-slate-300 text-zinc-800">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center md:gap-2 gap-[0.15rem]  md:w-[22vw] w-[30%]  md:ml-14 ml-[3rem]">
                <button className="md:px-4 md:py-2 p-1 md:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="md:text-lg text-[0.5rem]">
                    <AiOutlineLike />
                  </span>
                   {videoData?.statistics?.likeCount}
                </button>
                <button className="md:px-4 md:py-2 p-1 md:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="md:text-lg text-[0.5rem]">
                    <PiShareFatLight />
                  </span>
                  Share
                </button>
                <button className="md:px-4 md:py-2 p-1 md:text-[1rem] text-[0.5rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="md:text-lg text-[0.5rem]">
                    <LiaDownloadSolid />
                  </span>
                  Download
                </button>
              </div>
            </div>
            <div>
              <div className="md:p-3 p-1 md:mt-5 mt-2 rounded-lg bg-zinc-700  min-h-28 mb-4">
               <div className="flex md:gap-3 gap-1 font-semibold">
               <h6 className="text-xs md:text-[1rem]">{videoData?.statistics?.viewCount} views</h6>
               <h6 className="text-xs md:text-[1rem]">{formatDate(videoData?.snippet?.publishedAt)}</h6>
               </div>
               <p className="md:text-sm text-[0.6rem]">{videoData?.snippet?.description}</p>
              </div>
              
            </div>
            <div className="min-h-[100vh]  md:mt-3 mt-2 md:p-5 p-1">
              <h6 className="md:text-xl text-xs font-semibold">{videoData?.statistics?.commentCount} Comments</h6>
              <div className="md:mt-4 mt-1 mr-2 md:mr-0">
              {comments.map((commentItem) => {
                return <Comments item={commentItem} />
              })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-[23%] w-0">
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
        <div className=" lg:w-[63%] lg:h-[91.3vh] sm:h-[90vh] sm:w-[100%] w-[98%]  md:mt-20 mt-8 mx-1 md:ml-[8%]">
        <div className="min-h-[90vh]  lg:w-[60vw] sm:w-[95%] w-[100%] sm:ml-[5%]">
            <div className="lg:h-[65vh] lg:w-[60vw] h-[35vh] w-full lg:rounded-xl bg-zinc-800 overflow-hidden">
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
            <h1 className="lg:text-[1.3rem] md:text-[1.55rem] text-md md:pt-3 pt-1 font-semibold">
              {videoData?.snippet?.title}
            </h1>
            <div className="flex items-start md:mt-2 md:gap-2 gap-1 md:pt-3 pt-2 md:w-[55vw] w-full ">
              <div className="flex gap-2 md:w-[18vw] w-[60%] ">
                <div className="md:h-12 md:w-12 h-9 w-9 rounded-full overflow-hidden bg-zinc-700">
                    <img className="h-full w-full object-cover" src="https://imgs.search.brave.com/u3FUfiEc_iDQip6_Xv-rOV15GBFN6hsH_zAqDeu9Xig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODE4/MDIxMTgvcGhvdG8v/Y2xvc2V1cC1vZi1p/bWctZm91bmRlci1h/bmQtY2VvLW1hcmst/bWNjb3JtYWNrLWxp/Z29uaWVyLXBhLTgt/MTQtMTk2NS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YUNj/ZExpNjE4b19qSjNC/WjN4VTZyZGN6T25n/NmxmVXZHZlhIUVRx/RC1YST0" alt="" />
                </div>
                <div className="w-[75%]">
                  <h6 className="md:text-[1rem] text-[0.85rem] font-semibold">{videoData?.snippet?.channelTitle}</h6>
                  <p className="md:text-xs text-[0.7rem] text-gray-400 font-semibold">
                    22.6k 
                  </p>
                </div>
              </div>
              <div className="flex items-center md:gap-2 gap-1 md:w-[10vw] md:mt-0 mt-14 w-[15%] md:ml-0 -ml-56 ">
                <button className="md:px-4 md:py-2 px-2 py-1 lg:text-[1rem] text-[0.75rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600">
                  Join
                </button>
                <button className="md:px-4 md:py-2 px-2 py-1 md:text-[1rem] text-[0.75rem] rounded-full font-semibold bg-slate-200 hover:bg-slate-300 text-zinc-800">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center md:gap-2 gap-1 md:mt-0 mt-14 md:w-[22vw] w-[35%] md:ml-20 ml-16">
                <button className="md:px-4 md:py-2 px-2 py-1 md:text-[1rem] text-[0.75rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="md:text-lg text-[0.75rem]">
                    <AiOutlineLike />
                  </span>
                   {videoData?.statistics?.likeCount}
                </button>
                <button className="md:px-4 md:py-2 px-2 py-1 md:text-[1rem] text-[0.75rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="md:text-lg text-[0.75rem]">
                    <PiShareFatLight />
                  </span>
                  Share
                </button>
                <button className="md:px-4 md:py-2 px-2 py-1 md:text-[1rem] text-[0.75rem] rounded-full font-semibold bg-zinc-700 hover:bg-zinc-600 flex items-center gap-1">
                  <span className="md:text-lg text-[0.75rem]">
                    <LiaDownloadSolid />
                  </span>
                  Download
                </button>
              </div>
            </div>
            <div>
              <div className="md:p-3 p-1 md:mt-5 mt-3 md:rounded-lg bg-zinc-800  min-h-28 md:mb-4 mb-1">
               <div className="flex md:gap-3 gap-1 font-semibold">
               <h6 className="text-xs md:text-[1rem]">{videoData?.statistics?.viewCount} views</h6>
               <h6 className="text-xs md:text-[1rem]">{formatDate(videoData?.snippet?.publishedAt)}</h6>
               </div>
               <p className="md:text-sm text-[0.6rem]">{videoData?.snippet?.description}</p>
              </div>
              
            </div>
            <div className="min-h-[100vh] md:mt-3 mt-2 md:p-5 p-1 ">
              <h6 className="md:text-xl text-xs font-semibold">{videoData?.statistics?.commentCount} Comments</h6>
              <div className="md:mt-4 mt-1 mr-2 md:mr-0">
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
