import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { NavBar, LeftNav, MainContainer } from './components'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="App h-full w-full">
        <div className='h-full w-full flex'>
          <LeftNav/>
          <div className='h-full w-full flex flex-col'>
            <NavBar/>
            <MainContainer/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
