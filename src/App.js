import React from 'react'
import Home from './Services/Home'
import { Route, Routes } from 'react-router-dom'
import Userinfo from './Userinfo'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/info' element={<Userinfo/>}/>
    </Routes>
    
    </>
  )
}

export default App