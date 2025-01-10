import React from 'react'

const btnData = ["All", "Javascript", "React", "Web Development", "Live", "Music", "Podcasts", "AI", "Recently uploaded", "Watched", "Logical reasoning"]

const ButtonList = () => {
  return (
    <div className='py-5'>
        {btnData.map((item, index) => {
            return <button key={index} className='px-3 py-1 mx-2 rounded-lg bg-zinc-800 font-semibold'>{item}</button>
        })}
    </div>
  )
}

export default ButtonList