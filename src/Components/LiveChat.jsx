import React, { useEffect, useRef } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { clearMsg, setMsg } from "../Features/LivechatSlice";
import { generateRandomName, generateRandomText } from './utils/Random';

const LiveChat = ({vidId}) => {
    const message = useSelector((store) => store.livechat.message)
    const dispatch = useDispatch()
    const chatContainerRef = useRef(null);

    useEffect(() => {
      dispatch(clearMsg());
    }, [vidId, dispatch]);

    useEffect(() => {
        const timer = setInterval(() => {
          dispatch(setMsg({name: generateRandomName(), message: generateRandomText(15)}))
        }, 500)

        return (() =>{
          clearInterval(timer)
        })
    }, [dispatch])

    useEffect(() => {
      // Scroll to the bottom whenever the message array updates
      if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
  }, [message]); // Trigger this effect whenever a new message is added
    
  return (
    <div className='px-4 py-1 m-1 h-12 w-[95%]'>
         <div ref={chatContainerRef}>
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