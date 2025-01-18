import React from 'react'

const ChatMsg = ({item}) => {
  return (
    <div className='flex items-center gap-2 my-2 w-full '>
        <div className='w-[15%] overflow-hidden'>
            <img className='h-8 w-8 object-cover rounded-full' src="https://i.pinimg.com/236x/e2/f0/6c/e2f06c9101dc22814be2a2352f7dc871.jpg" alt="" />
        </div>
        <div className='flex items-start gap-3 w-[85%]'>
            <h1 className='text-md font-semibold text-zinc-300'>{item.name}</h1>
            <p className='w-full mr-2'>{item.message}</p>
        </div>
    </div>
  )
}

export default ChatMsg