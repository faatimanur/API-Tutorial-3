import React from 'react'
import Navbar from './components/navbar/Navbar'
import Register from './components/register/Register'
import Login from './components/login/Login'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

