import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";
import { useSelector } from "react-redux";

const Feed = () => {
  const sidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);

  return (
    <>
      {sidebarOpen ? (
        <div className="scrollbar scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 overflow-y-scroll w-[83%] lg:h-[91.3vh] md:min-h-[95vh] h-[96.7vh]  md:mt-16 mt-6 lg:ml-[18%] md:ml-[27%]">
          <ButtonList />
          <Videos />
        </div>
      ) : (
        <div className="scrollbar scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 overflow-y-scroll w-[100%] md:p-0 p-1 md:min-h-[95vh] lg:h-[91.3vh]  h-[96.4vh] md:mt-16 mt-10 md:mb-0 mb-10 md:ml-[10%]">
          <ButtonList />
          <Videos />
        </div>
      )}
    </>
  );
};

export default Feed;
