import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed'
import Watch from '../Watch'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Feed />}></Route>
        <Route path='/watch' element={<Watch />} ></Route>
    </Routes>
  )
}

export default Routing