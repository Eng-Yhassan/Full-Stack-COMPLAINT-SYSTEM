import React from 'react'
import LeftDash from '../components/LeftDash'
import Complaints from './Complaints'

const Dashboard = () => {
  return (
    <div className='flex gap-10'>
        <LeftDash/>
        <Complaints/>
    </div>
  )
}

export default Dashboard