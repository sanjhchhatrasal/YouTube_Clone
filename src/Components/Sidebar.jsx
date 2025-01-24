import React, { useEffect, useState } from 'react'
import * as icons from './Imports'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleSidebar } from '../Features/SidebarSlice'


const homeData = [
  {
    logo: <icons.SlHome />,
    title: "Home"
  },
  {
    logo: <icons.SiYoutubeshorts />,
    title: "Shorts"
  },
  {
    logo: <icons.MdOutlineSubscriptions />,
    title: "Subscriptions"
  },

]

const youData = [
  {
    logo: <icons.LuHistory />,
    title: "History"
  },
  {
    logo: <icons.MdOutlinePlaylistPlay />,
    title: "Playlists"
  },
  {
    logo: <icons.LiaFileVideoSolid />,
    title: "Your videos"
  },
  {
    logo: <icons.PiGraduationCapLight />,
    title: "Your courses"
  },
  {
    logo: <icons.MdOutlineWatchLater />,
    title: "Watch Later"
  },
  {
    logo: <icons.AiOutlineLike />,
    title: "Liked videos"
  },
  {
    logo: <icons.LiaDownloadSolid />,
    title: "Downloads"
  },
]

const subscriptionData = [
  {
    logo: <icons.FaWolfPackBattalion />,
    title: "Sheryians Coding School"
  },
  {
    logo: <icons.PiBowlSteam />,
    title: "Chai aur Code"
  },
  {
    logo: <icons.TbBrandYoutubeKids />,
    title: "TMKOC"
  },
]

const exploreData = [
  {
    logo: <icons.BsFire />,
    title: "Trending"
  },
  {
    logo: <icons.RiShoppingBag4Line />,
    title: "Shopping"
  },
  {
    logo: <icons.IoMusicalNotesOutline />,
    title: "Music"
  },
  {
    logo: <icons.PiFilmSlate />,
    title: "Films"
  },
  {
    logo: <icons.CgMediaLive />,
    title: "Live"
  },
  {
    logo: <icons.SiYoutubegaming />,
    title: "Gaming"
  },
  {
    logo: <icons.PiNewspaperClipping />,
    title: "News"
  },
  
  {
    logo: <icons.IoTrophyOutline /> ,
    title: "Sport"
  },
  {
    logo: <icons.PiGraduationCapLight />,
    title: "Courses"
  },
  {
    logo: <icons.GiLipstick />,
    title: "Fashion & Beauty"
  },
]

const settingData = [
  {
    logo: <icons.IoSettingsOutline />,
    title: "Settings"
  },
  {
    logo: <icons.IoFlagOutline />,
    title: "Report history"
  },
  {
    logo: <icons.IoIosHelpCircleOutline />,
    title: "Help"
  },
  {
    logo: <icons.RiFeedbackLine />,
    title: "Send Feedback"
  },
]

const toggleData = [
  {
    logo: <icons.SlHome />,
    title: "Home"
  },
  {
    logo: <icons.SiYoutubeshorts/>,
    title: "Shorts"
  },
  {
    logo: <icons.MdOutlineSubscriptions />,
    title: "Subscriptions"
  },
  {
    logo: <icons.CgProfile />,
    title: "You"
  },
  {
    logo: <icons.LiaDownloadSolid/>,
    title: "Downloads"
  }
]

const Sidebar = () => {

  const sidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen)
  const dispatch = useDispatch();

   // Handle screen size change
 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      // Dispatch action to set sidebarOpen to false if screen size is mobile
      dispatch(toggleSidebar(false)); // Ensure you have this action defined in your Redux setup
    }
  };

  // Initial check on component mount
  handleResize();

  // Add event listener for resize
  window.addEventListener('resize', handleResize);

  // Cleanup event listener on unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [dispatch]);

  return (
   <>
    <div className={`${sidebarOpen ? 'lg:w-[17%] md:w-[25%] w-[30%]' : 'md:w-[7%] w-[100%]'} md:h-[96.5vh] h-[8vh] fixed bottom-0 md:pt-10  md:mt-20 mt-5 md:border-none border-t-[1px] border-gray-500 bg-zinc-900 md:pl-6 pl-1`}>
      {sidebarOpen ? <div className='scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-full overflow-y-scroll overflow-x-hidden h-[96vh] relative left-0'>
      <div className='border-b-[1px] border-zinc-300 md:py-4 pt-3'>
      {homeData.map((item, index) => {
        return <Link to={'/'} key={index} className='flex items-start md:gap-4 gap-2 hover:bg-zinc-800 rounded-lg md:px-2 px-1 md:py-1'>
        <h1 className='md:text-xl text-xs mb-3'>{item.logo}</h1>
        <h1 className='text-xs md:text-[1rem]'>{item.title}</h1>
      </Link>
      })}
      </div>
      <div className='border-b-[1px] border-zinc-300 md:py-4 py-1'>
        <h1 className='md:text-lg text-xs md:mb-3 mb-1 flex md:gap-3 gap-1 items-center'>You <span className='md:text-xl text-xs'><icons.MdKeyboardArrowRight /></span></h1>
        {youData.map((item, index) => {
          return <div key={index}>
            <Link className='flex items-start md:gap-3 gap-2 hover:bg-zinc-800 rounded-lg px-2 md:py-1'>
            <h1 className='md:text-xl text-xs md:mb-3 mb-2'>{item.logo}</h1>
            <h1 className='text-xs md:text-[1rem]'>{item.title}</h1>
          </Link>
          </div>
        })}
      </div>
      <div className='border-b-[1px] border-zinc-300 md:py-4 py-1'>
        <h1 className='md:text-lg text-xs md:mb-3 mb-1 flex md:gap-3 gap-1 items-center'>Subscriptions <span className='md:text-xl text-xs'><icons.MdKeyboardArrowRight /></span></h1>
        {subscriptionData.map((item, index) => {
          return <div key={index}>
            <Link className='flex items-start md:gap-4 gap-2 hover:bg-zinc-800 rounded-lg px-2 md:py-1'>
            <h1 className='md:text-xl text-xs mb-3'>{item.logo}</h1>
            <h1 className='text-xs md:text-[0.9rem]'>{item.title}</h1>
          </Link>
          </div>
        })}
      </div>
      <div className='border-b-[1px] border-zinc-300 md:py-4 py-1'>
        <h1 className='md:text-lg text-xs md:mb-3 mb-1 flex md:gap-3 gap-1 items-center'>Explore <span className='md:text-xl text-xs'><icons.MdKeyboardArrowRight /></span></h1>
        {exploreData.map((item, index) => {
          return <div key={index}>
            <Link className='flex items-start gap-4 hover:bg-zinc-800 rounded-lg px-2 md:py-1'>
            <h1 className='md:text-xl text-xs md:mb-3 mb-2'>{item.logo}</h1>
            <h1 className='text-xs md:text-[1rem]'>{item.title}</h1>
          </Link>
          </div>
        })}
      </div>
      <div className=' md:py-4 py-1'>
      {settingData.map((item, index) => {
        return <Link key={index} className='flex items-start gap-4 hover:bg-zinc-800 rounded-lg px-2 md:py-1'>
        <h1 className='md:text-xl text-xs md:mb-3 mb-2'>{item.logo}</h1>
        <h1 className='text-xs md:text-[1rem]'>{item.title}</h1>
      </Link>
      })}
      </div>
      </div> :   <div className='md:w-[6%] w-full  flex md:flex-col md:gap-0 gap-7  md:mt-20 mt-2  md:px-6 px-1'>
    {toggleData.map((item, index) => {
      return <div key={index} className='flex flex-col items-center justify-center md:mb-4 mb-2 p-1'>
        <Link to={'/'} className='md:text-[1.3rem] text-[1.1rem] text-center md:mb-2 mb-1'>{item.logo}</Link>
        <h6 className='text-xs'>{item.title}</h6>
      </div>
    })}
  </div>}
      

    </div>
  
   </>
  )
}

export default Sidebar