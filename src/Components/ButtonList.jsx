import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const btnData = ["All", "Javascript", "React", "Web Development", "Live", "Music", "Podcasts", "AI", "Recently uploaded", "Watched", "Logical reasoning", "Comedy", "Thriller", "Cricket", "TMKOC", "Backend"]

const ButtonList = () => {
  const [active, setActive] = useState("All")

  const videoByTag = (tag) => {
    if(active !== tag){
      setActive(tag)
    }
  }
  console.log(active)

  return (
    <div className='py-5 flex flex-shrink-0 w-full overflow-x-auto no-scrollbar'>
        {btnData.map((item, index) => {
            return <div  key={index}><NavLink onClick={() => {videoByTag(item)}}  className={` px-3 py-1 w-fit mx-2 rounded-lg ${active === item ?  "bg-gray-200" : "bg-zinc-800"} ${active === item ?  "text-zinc-800" : "text-gray-200"}  font-semibold`}><span className='whitespace-nowrap'>{item}</span></NavLink></div> 
        })}
    </div>
  )
}

export default ButtonList