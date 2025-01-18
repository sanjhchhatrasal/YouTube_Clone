import React, { useEffect } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { clearMsg, setMsg } from "../Features/LivechatSlice";
import { generateRandomName, generateRandomText } from './utils/Random';

const LiveChat = ({vidId}) => {
    const message = useSelector((store) => store.livechat.message)
    const dispatch = useDispatch()

    useEffect(() => {
      // Clear chat messages when a new video is loaded
      dispatch(clearMsg());
    }, [vidId, dispatch]);

    useEffect(() => {
        const timer = setInterval(() => {
          dispatch(setMsg({name: generateRandomName(), message: generateRandomText(15)}))
        }, 1000)

        return (() =>{
          clearInterval(timer)
        })
    }, [dispatch])
    
  return (
    <div className='px-4 py-1 m-1 h-12 w-[95%]'>
         <div className=''>
            {message.map((item, index) => {
                return (
                    <ChatMsg  key={index} item={item} />
                )
            })}
        </div>
    </div>
  )
}

export default LiveChat