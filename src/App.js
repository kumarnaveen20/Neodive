import React from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import Rightbar from './components/rightbar/Rightbar'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import Authdetails from './Authdetails'

const App = () => {
  return (
    <>
    {/* <Register/> */}
    {/* <Login/> */}
    {/* <Authdetails/>     */}

    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

    </Routes>
    </>
  )
}

export default App
