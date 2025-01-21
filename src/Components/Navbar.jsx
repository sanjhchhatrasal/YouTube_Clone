import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSearchSuggestion,
  toggleSidebar,
} from "../Features/SidebarSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { SEARCH_SUGGESTION_API } from "../Constants/constants";

const Navbar = () => {
  const dispatch = useDispatch();
  const [input, setinput] = useState("");
  const [suggestion, setsuggestion] = useState(false)
  const { searchSuggestions } = useSelector((store) => store.sidebar);

  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const searchVideo = () => {
    dispatch(setCategory(input));
    setinput("");
  };

  const searchSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTION_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (err) {
      console.log(err);
    }
  };

  const openSuggestion = () => {
    setsuggestion(true)
  }

  useEffect(() => {
    searchSuggestion();
  }, [input]);

  return (
    <div className="fixed w-full z-10 ">
      <div className="h-16 w-full bg-zinc-900 flex  items-center justify-between px-5 text-white">
        <div className="flex gap-6 items-center">
          <GiHamburgerMenu
            onClick={toggleHandler}
            className="text-2xl text-white cursor-pointer"
          />
          <Link to="/">
            <img
              className="w-24 cursor-pointer"
              src="https://imgs.search.brave.com/3Ndi-yWkEfFIqB1hp23kYybjweXEKi993-DZvX7_wow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcveW91dHViZS1s/b2dvLXBuZy1pbWFn/ZS5wbmc"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center rounded-full bg-zinc-900 px-2 py-1 overflow-hidden border-[1px] border-zinc-600">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            onFocus={openSuggestion}
            type="text"
            className="w-[30vw] h-8 px-3 bg-zinc-900 outline-none"
            placeholder="Search"
          />
          <div className="w-14 flex items-center justify-center">
            <IoSearchOutline
              onClick={searchVideo}
              className="text-2xl text-white cursor-pointer"
            />
          </div>
        </div>

        <div className="flex gap-7 items-center">
          <div className="flex gap-4 items-center">
            <div className="px-4 py-2 rounded-full bg-zinc-800">
              <h6 className="flex gap-2 items-center justify-center cursor-pointer">
                <AiOutlinePlus /> Create
              </h6>
            </div>
            <IoIosNotificationsOutline className="text-2xl font-bold cursor-pointer" />
          </div>
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover cursor-pointer"
              src="https://i.pinimg.com/236x/e2/f0/6c/e2f06c9101dc22814be2a2352f7dc871.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
     {(suggestion && searchSuggestion.length !== 0) &&  <div className="flex flex-col gap-2 absolute left-[31%] rounded-xl p-6 bg-zinc-800 w-[32%]">
        {searchSuggestions.map((item, index) => {
          return (
            <p
              key={index}
              onClick={searchVideo}
              className="flex gap-2 items-center text-lg px-2 py-1 hover:bg-zinc-600 rounded-lg cursor-pointer"
            >
              <IoSearchOutline /> {item}
            </p>
          );
        })}
      </div>}
    </div>
  );
};

export default Navbar;
