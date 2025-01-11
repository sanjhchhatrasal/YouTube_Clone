import React from "react";
import { useSelector } from "react-redux";

const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ....";
    }
    return title;
  };

const VideoCard = ({item}) => {
  const sidebar = useSelector((store) => store.sidebar.isSidebarOpen);

  return (
    <>
      {sidebar ? (
        <div className="h-[23vw] w-[25vw]  overflow-hidden">
            <div className="h-[60%] rounded-lg w-full bg-red-200 overflow-hidden">
                <img className="h-full w-full hover:scale-105 transition ease-out duration-150 cursor-pointer object-cover" src={item.snippet.thumbnails.high.url} alt="" />
            </div>
            <div className="flex gap-3 py-3 items-start">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-yellow-300">
                    <img className="h-full w-full object-cover" src="https://i.pinimg.com/236x/e2/f0/6c/e2f06c9101dc22814be2a2352f7dc871.jpg" alt="" />
                </div>
                <div className="w-[80%]">
                    <h1 className="text-lg font-semibold">{truncateTitle(item.snippet.title, 10)}</h1>
                    <h2 className="text-sm font-semibold text-gray-400 ">{item.snippet.channelTitle}</h2>
                </div>
            </div>
        </div>
      ) : (
        <div className="h-[18vw] w-[20vw] overflow-hidden">
          <div className="h-[60%] w-full rounded-lg bg-red-200 overflow-hidden">
                <img className="h-full w-full object-cover" src={item.snippet.thumbnails.high.url} alt="" />
            </div>
            <div className="flex gap-3 py-3 items-start">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-yellow-300">
                    <img className="h-full w-full object-cover" src="https://i.pinimg.com/236x/e2/f0/6c/e2f06c9101dc22814be2a2352f7dc871.jpg" alt="" />
                </div>
                <div className="w-[80%]">
                    <h1 className="text-lg font-semibold">{truncateTitle(item.snippet.title, 10)}</h1>
                    <h2 className="text-sm font-semibold text-gray-400  ">{item.snippet.channelTitle}</h2>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
