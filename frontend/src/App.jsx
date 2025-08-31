import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Complaints from './pages/Complaints'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App