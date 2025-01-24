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

  useEffect(() => {
    searchSuggestion();
  }, [input]);

  return (
    <div className="fixed w-full z-10">
      <div className="md:h-16 h-10 w-full bg-zinc-900 flex  items-center justify-between md:px-5 px-1 text-white">
        <div className="flex md:gap-6 gap-2 items-center">
          <GiHamburgerMenu
            onClick={toggleHandler}
            className="md:text-2xl hidden md:block text-white cursor-pointer"
          />
          <Link to="/">
            <img
              className="md:w-24 sm:w-20 w-16 cursor-pointer"
              src="https://imgs.search.brave.com/3Ndi-yWkEfFIqB1hp23kYybjweXEKi993-DZvX7_wow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcveW91dHViZS1s/b2dvLXBuZy1pbWFn/ZS5wbmc"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center rounded-full h-7 md:h-10 bg-zinc-900 md:p-1 py-1  overflow-hidden border-[1px] border-zinc-600">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            className="md:w-[30vw] w-[40vw] md:h-8 h-7 px-3 text-sm md:text-md bg-zinc-900 outline-none"
            placeholder="Search"
          />
          <div className="md:w-14 sm:w-8 w-4 mr-2 md:mr-0 flex items-center justify-center">
            <IoSearchOutline
              onClick={searchVideo}
              className="text-2xl text-white cursor-pointer"
            />
          </div>
        </div>

        <div className="flex md:gap-7 gap-2 items-center">
          <div className="flex lg:gap-4 gap-1 items-center">
            <div className="md:px-4 md:py-2 hidden md:block px-[4px] py-[1px] rounded-full bg-zinc-800">
              <h6 className="flex md:gap-2 text-[0.7rem] sm:text-md items-center justify-center cursor-pointer">
                <AiOutlinePlus /> Create
              </h6>
            </div>
            <IoIosNotificationsOutline className="sm:text-2xl text-xl font-bold cursor-pointer" />
          </div>
          <div className="sm:h-8 h-7 sm:w-8 w-7 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover cursor-pointer"
              src="https://i.pinimg.com/236x/e2/f0/6c/e2f06c9101dc22814be2a2352f7dc871.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
     {input !== "" &&  <div className="flex flex-col lg:gap-2 gap-1 absolute lg:left-[31%] left-[20%] rounded-xl lg:p-6 p-1 bg-zinc-800 lg:w-[32%] w-[47%]">
        {searchSuggestions.map((item, index) => {
          return (
            <p
              key={index}
              onClick={searchVideo}
              className="flex lg:gap-2 gap-1 items-center lg:text-lg text-sm px-2 lg:py-1 hover:bg-zinc-600 rounded-lg cursor-pointer"
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
