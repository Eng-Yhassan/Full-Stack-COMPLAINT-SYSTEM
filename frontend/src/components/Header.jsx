import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-evenly items-center  bg-green-300 text-white'>
      <h1 className=' text-3xl font-semibold py-4'>Online Complaints Managment System</h1>
      <Link to="/dashboard">
        <button className='bg-yellow-300 px-14 py-2 text-3xl text-white rounded-lg'> Dashboard</button>
      </Link>

    </div>
  )
}

export default Header