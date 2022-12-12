import React from 'react'
import Navbar from '../../Components/Navbar'

function Login() {
  return (
    <div className='bg-gray-200 h-screen'>
        <Navbar/>
        <div className='px-60 mt-28'>
            <div className='border mx-[500px] p-5 bg-white drop-shadow-lg'>
                <h1 className='text-center font-semibold text-3xl'>Login</h1>
                <hr className='mt-5'/>
                <div className='mt-5'>
                    <label>Username</label>
                    <input type='text' className='border p-2 rounded-md w-full mt-2' placeholder='Username Here'/>
                </div>
                <div className='mt-5'>
                    <label>Password</label>
                    <input type='password' className='border p-2 rounded-md w-full mt-2' placeholder='Password Here'/>
                </div>
                <div className='mt-7'>
                    <a className='bg-green-600 text-white px-3 py-2'>Log In</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login