import React, { useState } from 'react'
import * as icons from './Imports'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


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

  return (
   <>
    <div className={`${sidebarOpen ? 'lg:w-[17%] w-[30%]' : 'lg:w-[7%] w-[9%]'} h-[96.5vh] fixed lg:pt-3  lg:mt-16 mt-5 bg-zinc-900 lg:pl-6 pl-1`}>
      {sidebarOpen ? <div className='scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-full overflow-y-scroll overflow-x-hidden h-[96vh] relative left-0'>
      <div className='border-b-[1px] border-zinc-300 lg:py-4 pt-3'>
      {homeData.map((item, index) => {
        return <Link to={'/'} key={index} className='flex items-start lg:gap-4 gap-2 hover:bg-zinc-800 rounded-lg lg:px-2 px-1 lg:py-1'>
        <h1 className='lg:text-xl text-xs mb-3'>{item.logo}</h1>
        <h1 className='text-xs lg:text-[1rem]'>{item.title}</h1>
      </Link>
      })}
      </div>
      <div className='border-b-[1px] border-zinc-300 lg:py-4 py-1'>
        <h1 className='lg:text-lg text-xs lg:mb-3 mb-1 flex lg:gap-3 gap-1 items-center'>You <span className='lg:text-xl text-xs'><icons.MdKeyboardArrowRight /></span></h1>
        {youData.map((item, index) => {
          return <div key={index}>
            <Link className='flex items-start lg:gap-3 gap-2 hover:bg-zinc-800 rounded-lg px-2 lg:py-1'>
            <h1 className='lg:text-xl text-xs lg:mb-3 mb-2'>{item.logo}</h1>
            <h1 className='text-xs lg:text-[1rem]'>{item.title}</h1>
          </Link>
          </div>
        })}
      </div>
      <div className='border-b-[1px] border-zinc-300 lg:py-4 py-1'>
        <h1 className='lg:text-lg text-xs lg:mb-3 mb-1 flex lg:gap-3 gap-1 items-center'>Subscriptions <span className='lg:text-xl text-xs'><icons.MdKeyboardArrowRight /></span></h1>
        {subscriptionData.map((item, index) => {
          return <div key={index}>
            <Link className='flex items-start lg:gap-4 gap-2 hover:bg-zinc-800 rounded-lg px-2 lg:py-1'>
            <h1 className='lg:text-xl text-xs mb-3'>{item.logo}</h1>
            <h1 className='text-xs lg:text-[0.9rem]'>{item.title}</h1>
          </Link>
          </div>
        })}
      </div>
      <div className='border-b-[1px] border-zinc-300 lg:py-4 py-1'>
        <h1 className='lg:text-lg text-xs lg:mb-3 mb-1 flex lg:gap-3 gap-1 items-center'>Explore <span className='lg:text-xl text-xs'><icons.MdKeyboardArrowRight /></span></h1>
        {exploreData.map((item, index) => {
          return <div key={index}>
            <Link className='flex items-start gap-4 hover:bg-zinc-800 rounded-lg px-2 lg:py-1'>
            <h1 className='lg:text-xl text-xs lg:mb-3 mb-2'>{item.logo}</h1>
            <h1 className='text-xs lg:text-[1rem]'>{item.title}</h1>
          </Link>
          </div>
        })}
      </div>
      <div className=' lg:py-4 py-1'>
      {settingData.map((item, index) => {
        return <Link key={index} className='flex items-start gap-4 hover:bg-zinc-800 rounded-lg px-2 lg:py-1'>
        <h1 className='lg:text-xl text-xs lg:mb-3 mb-2'>{item.logo}</h1>
        <h1 className='text-xs lg:text-[1rem]'>{item.title}</h1>
      </Link>
      })}
      </div>
      </div> :   <div className='w-[6%]  lg:mt-20 mt-2  lg:px-6 px-1'>
    {toggleData.map((item, index) => {
      return <div key={index} className='flex flex-col items-center justify-center lg:mb-4 mb-2 p-1'>
        <h1 className='lg:text-[1.3rem] text-xs text-center lg:mb-2 mb-1'>{item.logo}</h1>
        <h6 className='lg:text-xs text-[0.35rem]'>{item.title}</h6>
      </div>
    })}
  </div>}
      

    </div>
  
   </>
  )
}

export default Sidebar