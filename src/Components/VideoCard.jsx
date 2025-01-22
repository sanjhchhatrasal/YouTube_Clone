import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_KEY } from "../Constants/constants";

const truncateTitle = (title, wordLimit) => {
  const words = title.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ....";
  }
  return title;
};

const VideoCard = ({ item }) => {
  const sidebar = useSelector((store) => store.sidebar.isSidebarOpen);
  const [ytDp, setytDp] = useState("");

  const getYoutubeChannel = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY} `
      );
      setytDp(res.data.items[0].snippet.thumbnails.high.url);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getYoutubeChannel();
  }, []);

  return (
    <>
      {sidebar ? (
        <div className="lg:h-[23vw] lg:w-[25vw] h-[30vh] w-[40vw] overflow-hidden">
          <div className="lg:h-[60%] h-[65%] rounded-lg w-full bg-zinc-800 overflow-hidden">
            <img
              className="h-full w-full hover:scale-105 transition ease-out duration-150 cursor-pointer object-cover"
              src={item.snippet.thumbnails.high.url}
              alt=""
            />
          </div>
          <div className="flex lg:gap-3 gap-1 lg:py-3 py-1 items-start">
            <div className="lg:h-10 lg:w-10 h-7 w-7 rounded-full overflow-hidden bg-zinc-900">
              <img
                className="h-full w-full object-cover"
                src={ytDp}
                onError={(e) =>
                  (e.target.src =
                    "https://imgs.search.brave.com/olU1frCI_rKOD3-NBWDPcqTpdn8YDMNYb2wVQ2TmqlM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQ2LzgzLzk2/LzM2MF9GXzM0Njgz/OTY4M182bkFQemJo/cFNrSXBiOHBtQXd1/ZmtDN2M1ZUQ3d1l3/cy5qcGc")
                }
                alt=""
              />
            </div>
            <div className="lg:w-[80%] w-[77%] ">
              <h1 className="lg:text-lg text-[0.65rem] font-semibold">
                {truncateTitle(item.snippet.title, 10)}
              </h1>
              <h2 className="lg:text-sm text-[0.6rem] font-semibold text-gray-400 ">
                {item.snippet.channelTitle}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:h-[18vw]  h-[42vh] w-[97vw] lg:mb-0 mb-2 lg:w-[20vw] lg:m-0 overflow-hidden">
          <div className="lg:h-[60%] h-[65%] w-full rounded-lg bg-zinc-700 overflow-hidden">
            <img
              className="h-full w-full object-cover hover:scale-105 transition ease-out duration-150 cursor-pointer"
              src={item.snippet.thumbnails.high.url}
              alt=""
            />
          </div>
          <div className="flex lg:gap-3 gap-2 lg:py-3 py-1 items-start">
            <div className="lg:h-10 lg:w-10 h-9 w-9 rounded-full overflow-hidden  bg-zinc-800">
              <img
                className="h-full w-full object-cover "
                src="https://i.pinimg.com/236x/e2/f0/6c/e2f06c9101dc22814be2a2352f7dc871.jpg"
                alt=""
              />
            </div>
            <div className="lg:w-[80%] w-[77%] ">
              <h1 className="lg:text-lg text-md font-semibold">
                {truncateTitle(item.snippet.title, 10)}
              </h1>
              <div className="flex gap-3">
              <h2 className="lg:text-xs text-xs font-semibold text-gray-400  ">
                {item.snippet.channelTitle}
              </h2>
              {/* <h2 className="lg:text-xs flex gap-2 text-xs font-semibold text-gray-400  ">{item.statistics.viewCount} views</h2>
              <h2 className="lg:text-xs flex gap-2 text-xs font-semibold text-gray-400  ">{item.statistics.likeCount} likes</h2> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
