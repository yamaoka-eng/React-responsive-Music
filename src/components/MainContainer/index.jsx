import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Recommend from '../../pages/Recommend'
import MusicHall from '../../pages/MusicHall'

const MainContainer = () => {
  return (
    <div className='flex-1 bg-transparent'>
      <Routes>
        <Route path='/recommend' element={<Recommend/>}/>
        <Route path='/musichall' element={<MusicHall/>}/>
      </Routes>
    </div>
  )
}

export default MainContainer
