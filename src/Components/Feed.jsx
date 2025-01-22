import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";
import { useSelector } from "react-redux";

const Feed = () => {
  const sidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);

  return (
    <>
      {sidebarOpen ? (
        <div className="scrollbar scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 overflow-y-scroll w-[83%]   lg:h-[91.3vh] h-[96.4vh]  lg:mt-16 mt-6 ml-[18%]">
          <ButtonList />
          <Videos />
        </div>
      ) : (
        <div className="scrollbar scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 overflow-y-scroll w-[100%] lg:h-[91.3vh] h-[96.4vh] lg:mt-16 mt-6 ml-[10%]">
          <ButtonList />
          <Videos />
        </div>
      )}
    </>
  );
};

export default Feed;
