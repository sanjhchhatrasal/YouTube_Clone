import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";
import { useSelector } from "react-redux";

const Feed = () => {
  const sidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);

  return (
    <>
      {sidebarOpen ? (
        <div className="scrollbar scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 overflow-y-scroll w-[83%] bg-zinc-900 h-[91.3vh]  mt-16 ml-[18%]">
          <ButtonList />
          <Videos />
        </div>
      ) : (
        <div className="w-[100%] min-h-[100vh] bg-zinc-900  mt-16 ml-[10%]">
          <ButtonList />
          <Videos />
        </div>
      )}
    </>
  );
};

export default Feed;
