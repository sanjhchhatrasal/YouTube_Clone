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
    <div className=" w-full flex p-2 gap-4 ">
      <div className="w-[8%] overflow-hidden ">
        <img
          className="h-12 w-12 bg-zinc-800 rounded-full object-cover"
          src={`${item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}`}
          alt=""
          onError={(e) => e.target.src = 'https://imgs.search.brave.com/olU1frCI_rKOD3-NBWDPcqTpdn8YDMNYb2wVQ2TmqlM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQ2LzgzLzk2/LzM2MF9GXzM0Njgz/OTY4M182bkFQemJo/cFNrSXBiOHBtQXd1/ZmtDN2M1ZUQ3d1l3/cy5qcGc'} 
        />
      </div>
      <div className="w-[92%] ">
        <p className="text-sm font-semibold flex items-center gap-2">
          {item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          <span className="text-zinc-400 text-sm">
            {formatDate(
              item?.snippet?.topLevelComment?.snippet?.publishedAt
            )}
          </span>
        </p>
        <h6 className="text-[0.95rem] mt-1">
          {item?.snippet?.topLevelComment?.snippet?.textDisplay}
        </h6>
        <div className="flex items-center text-zinc-300 gap-5 mt-4 ">
          <span className="text-lg flex gap-1 items-center">
            <RiThumbUpLine />
            {item?.snippet?.topLevelComment?.snippet?.likeCount}
          </span>
          <span className="text-xl">
            <HiOutlineThumbDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comments;
