import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCategory } from '../Features/SidebarSlice'

const btnData = ["All", "Javascript", "React", "Web Development", "TMKOC",  "Live", "Music", "Podcasts", "AI", "Recently uploaded", "Vlogs", "Logical reasoning", "Comedy", "Thriller", "Cricket", "Backend"]

const ButtonList = () => {
  const [active, setActive] = useState("All")

  const dispatch = useDispatch()

  const videoByTag = (tag) => {
    if(active !== tag){
      dispatch(setCategory(tag))
      setActive(tag)
    }
  }
  console.log(active)

  return (
    <div className='lg:py-5 py-1 flex flex-shrink-0 w-full overflow-x-auto no-scrollbar'>
        {btnData.map((item, index) => {
            return <div  key={index}><NavLink onClick={() => {videoByTag(item)}}  className={` lg:px-3 px-2 lg:py-1 py-[1px] w-fit lg:mx-2 mx-1 rounded-lg ${active === item ?  "bg-gray-200" : "bg-zinc-800"} ${active === item ?  "text-zinc-800" : "text-gray-200"}  font-semibold`}><span className='whitespace-nowrap text-xs lg:text-[1rem]'>{item}</span></NavLink></div> 
        })}
    </div>
  )
}

export default ButtonList