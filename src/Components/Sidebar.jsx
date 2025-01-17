import React, { useState } from 'react'
import * as icons from './Imports'
import { useSelector } from 'react-redux'


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
    <div className={`${sidebarOpen ? 'w-[17%]' : 'w-[8%]'} h-[93vh] fixed pt-3  mt-16 bg-zinc-900 pl-6`}>
      {sidebarOpen ? <div className='scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-full overflow-y-scroll overflow-x-hidden h-[92vh] relative left-0'>
      <div className='border-b-[1px] border-zinc-300 py-4'>
      {homeData.map((item, index) => {
        return <div key={index} className='flex items-start gap-4'>
        <h1 className='text-xl mb-3'>{item.logo}</h1>
        <h1>{item.title}</h1>
      </div>
      })}
      </div>
      <div className='border-b-[1px] border-zinc-300 py-4'>
        <h1 className='text-lg mb-3 flex gap-3 items-center'>You <span className='text-xl'><icons.MdKeyboardArrowRight /></span></h1>
        {youData.map((item, index) => {
          return <div key={index}>
            <div className='flex items-start gap-4'>
            <h1 className='text-[1.35rem] mb-4'>{item.logo}</h1>
            <h1>{item.title}</h1>
          </div>
          </div>
        })}
      </div>
      <div className='border-b-[1px] border-zinc-300 py-4'>
        <h1 className='text-lg mb-3 flex gap-3 items-center'>Subscriptions <span className='text-xl'><icons.MdKeyboardArrowRight /></span></h1>
        {subscriptionData.map((item, index) => {
          return <div key={index}>
            <div className='flex items-start gap-4'>
            <h1 className='text-[1.35rem] mb-4'>{item.logo}</h1>
            <h1>{item.title}</h1>
          </div>
          </div>
        })}
      </div>
      <div className='border-b-[1px] border-zinc-300 py-4'>
        <h1 className='text-lg mb-3 flex gap-3 items-center'>Explore <span className='text-xl'><icons.MdKeyboardArrowRight /></span></h1>
        {exploreData.map((item, index) => {
          return <div key={index}>
            <div className='flex items-start gap-4'>
            <h1 className='text-[1.35rem] mb-4'>{item.logo}</h1>
            <h1>{item.title}</h1>
          </div>
          </div>
        })}
      </div>
      <div className=' py-4'>
      {settingData.map((item, index) => {
        return <div key={index} className='flex items-start gap-4'>
        <h1 className='text-xl mb-3'>{item.logo}</h1>
        <h1>{item.title}</h1>
      </div>
      })}
      </div>
      </div> :   <div className='w-[6%]  mt-20  px-6'>
    {toggleData.map((item, index) => {
      return <div key={index} className='flex flex-col items-center justify-center mb-4'>
        <h1 className='text-[1.3rem] text-center mb-2'>{item.logo}</h1>
        <h6 className='text-xs'>{item.title}</h6>
      </div>
    })}
  </div>}
      

    </div>
  
   </>
  )
}

export default Sidebar