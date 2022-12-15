import React from 'react'
import Navbar from '../Components/Navbar'

function Unauthorized() {
  return (
    <div>
        <Navbar/>
        <center>
            <h1 className='font-bold text-4xl mt-6'>403</h1>
            <p>Unauthorize</p>
        </center>
    </div>
  )
}

export default Unauthorized