import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export const CaptainSignup = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullName:{
          firstName:firstName,
          lastName:lastName
        },
        email:email,
        password:password
      })
      // console.log(userData);
      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
    }
  return (
    <div>
      <div className='py-5 px-5 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="Logo" />
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's Name</h3>
            <div className='flex gap-4 mb-6'>
              <input
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='First Name'
              />
              <input
                required
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='Last Name'
              />
            </div>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's Email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="password"
              placeholder='password'
            />

            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
            >
              Login
            </button>
            <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
          </form>
        </div>
        <div>
        <p className='text-[10px] leadind-tight'>his site is protected by 
            reCAPTCHA and the <span className='underline'>Google 
            Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default CaptainSignup