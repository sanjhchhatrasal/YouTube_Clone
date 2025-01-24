import React from "react";
import { RiThumbUpLine } from "react-icons/ri";
import { HiOutlineThumbDown } from "react-icons/hi";

const Comments = ({ item }) => {
  const formatDate = (timestamp) => {
    if (!timestamp) return ""; // Handle case where timestamp is undefined or null

    const date = new Date(timestamp); // Convert timestamp to Date object
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className=" w-full flex lg:p-2 lg:gap-4 gap-1 ">
      <div className="lg:w-[8%] w-[10%] overflow-hidden ">
        <img
          className="md:h-12 md:w-12 h-8 w-8 bg-zinc-800 rounded-full object-cover"
          src={`${item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}`}
          alt=""
          onError={(e) => e.target.src = 'https://imgs.search.brave.com/olU1frCI_rKOD3-NBWDPcqTpdn8YDMNYb2wVQ2TmqlM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQ2LzgzLzk2/LzM2MF9GXzM0Njgz/OTY4M182bkFQemJo/cFNrSXBiOHBtQXd1/ZmtDN2M1ZUQ3d1l3/cy5qcGc'} 
        />
      </div>
      <div className="w-[92%] ">
        <p className="lg:text-sm md:text-md text-[0.65rem] font-semibold flex items-center gap-2">
          {item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          <span className="text-zinc-400 lg:text-sm md:text-md text-[0.65rem]">
            {formatDate(
              item?.snippet?.topLevelComment?.snippet?.publishedAt
            )}
          </span>
        </p>
        <h6 className="lg:text-[0.95rem] md:text-[1.1rem] text-xs mt-1">
          {item?.snippet?.topLevelComment?.snippet?.textDisplay}
        </h6>
        <div className="flex items-center text-zinc-300 lg:gap-5 gap-3 lg:mt-4 mt-2">
          <span className="lg:text-lg md:text-[1rem] text-xs flex gap-1 items-center">
            <RiThumbUpLine />
            {item?.snippet?.topLevelComment?.snippet?.likeCount}
          </span>
          <span className="lg:text-lg md:text-[1rem] text-xs">
            <HiOutlineThumbDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comments;
