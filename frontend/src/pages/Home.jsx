import React from 'react'
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.stockcake.com/public/2/b/a/2ba46115-0fff-41db-b53e-9935b0c952aa_large/illuminated-traffic-signals-stockcake.jpg)] h-screen pt-8  flex justify-between flex-col w-full'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Logo" />
        <div className='bg-white  pb-7 py-4 px-4'>
          <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex item-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}
export default Home