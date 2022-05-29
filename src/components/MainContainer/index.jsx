import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import Recommend from '../../pages/Recommend'
// import MusicHall from '../../pages/MusicHall'
import { lazyLoadComponent } from '../../utils'
const Recommend = () => import('../../pages/Recommend')
const MusicHall = () => import('../../pages/MusicHall')

const MainContainer = () => {
  return (
    <div className='flex-1 bg-transparent'>
      <Routes>
        <Route path='/recommend' element={lazyLoadComponent(Recommend)}/>
        <Route path='/musichall' element={lazyLoadComponent(MusicHall)}/>
      </Routes>
    </div>
  )
}

export default MainContainer
