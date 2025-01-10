import React from 'react'
import ButtonList from './ButtonList'
import Videos from './Videos'
import { useSelector } from 'react-redux'

const Feed = () => {

  const sidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen)

  return (
    <>
      {sidebarOpen ? <div className='w-[83%] h-[90vh]  mt-16 ml-5'>
      <ButtonList />
      <Videos />
  </div> : <div className='w-[100%] h-[90vh]  mt-16 ml-5'>
      <ButtonList />
      <Videos />
  </div>}
    </>
  )
}

export default Feed