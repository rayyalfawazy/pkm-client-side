import React from 'react'
import { useState } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom'

function Produk() {
  return (
    <div className='bg-white px-60 py-10 border rounded-b-lg grid grid-cols-2 gap-5 w-full'>
      <div className='bg-gray-300 py-5 rounded-lg'>
        <h1 className='text-center m-4'><a href='/sampah'>Beli Sampah</a></h1>
      </div>
      <div className='bg-gray-300 py-5 rounded-lg'>
        <h1 className='text-center m-4'><a href='/produk/all'>Beli Produk</a></h1>
      </div>
    </div>
  )
}

function Navbar() {
  const [auth, setAuth] = useState()
  const route = useLocation()
  const params = useParams()
  const [open, makeOpen] = useState(false);
  const handleProdukDropdown = () => {
    makeOpen(true)
    if (open === true) {
      makeOpen(false)
    }
  }
  
  return (
    <div className='sticky top-0'>
      <div className='border-b-2 border-red-600 px-60 py-5 flex justify-between bg-white'>
        <h1 className='font-bold drop-shadow-xl text-red-800 text-xl'>BRAND</h1>
        <ul className='flex space-x-6'>
            <li><NavLink to='/'>Beranda</NavLink></li>
            <li><button onClick={handleProdukDropdown}>Produk</button></li>
            <li>Tentang Kami</li>
        </ul>
        <ul className='flex space-x-6'>
          {auth ? 
            <li>
              { route.pathname !== `/dashboard/${route.pathname, params.jenis}` ? <a href='/dashboard'>Dashboard</a> : "" }
            </li>
          : 
            <div className='flex space-x-6'>
              <li><a href='/user/login'>Login</a></li>
              <li><a href='/user/register'>Register</a></li>
            </div>
          }

        </ul>  
      </div>
      <div className=''>
      {open === true ? <Produk/> : ""}
      </div>
    </div>

  )
}

export default Navbar