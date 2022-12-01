import React from 'react'
import Navbar from '../Components/Navbar'

function NotFound() {
  return (
    <div>
        <Navbar/>
        <center>
            <h1 className='font-bold text-4xl mt-6'>404</h1>
            <p>Bad Address</p>
        </center>
    </div>
  )
}

export default NotFound