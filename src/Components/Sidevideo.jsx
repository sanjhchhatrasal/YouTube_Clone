import React from 'react'

const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ....";
    }
    return title;
  };

const Sidevideo = ({item}) => {
  return (
    <div className='w-full h-[24vh] py-1 flex gap-5'>
        <div className='h-[18vh] w-[55%] rounded-lg overflow-hidden bg-zinc-800 hover:scale-105 transition ease-out duration-150 cursor-pointer'>
            <img className='h-full w-full object-cover' src={item.snippet.thumbnails.medium.url} alt="" />
        </div>
        <div className='w-[45%] h-[22vh] overflow-hidden'>
            <h5 className='text-md font-semibold'>{truncateTitle(item.snippet.title, 10)}</h5>
            <h6 className='text-sm text-zinc-400 pt-1'>{item.snippet.channelTitle}</h6>
            <div className='flex gap-3 pt-1'>
                <p className='text-[0.75rem] text-zinc-400'>1.5M views</p>
                <p className='text-[0.75rem] text-zinc-400'>2 months ago</p>
            </div>
        </div>

    </div>
  )
}

export default Sidevideo