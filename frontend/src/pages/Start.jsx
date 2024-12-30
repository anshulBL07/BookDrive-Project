import React from 'react'
import {Link} from 'react-router-dom';
import logo from './mainimg.png'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full'>
        <img className='w-20 h-8 ml-8' src={logo} alt="Logo" />
        <div className='bg-blue-100  pb-7 py-4 px-4'>
          <h2 className='text-[32px] font-bold ml-12 '>Get Started with <img className=' w-25 h-12 ml-10' src={logo} alt="Logo" /></h2>
          <Link to='/login' className='flex item-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}
export default Start