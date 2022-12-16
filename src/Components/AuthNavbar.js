import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, reset } from '../Feature/AuthSlice'

function Produk() {
  return (
    <div className='bg-white px-60 py-10 border rounded-b-lg grid grid-cols-2 gap-5 w-full'>
      <div className='bg-gray-300 py-5 rounded-lg'>
        <h1 className='text-center m-4'><a href='/sampah'>Beli Sampah</a></h1>
      </div>
      <div className='bg-gray-300 py-5 rounded-lg'>
        <h1 className='text-center m-4'><a href='/produk/plastik'>Beli Produk</a></h1>
      </div>
    </div>
  )
}

function AuthNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth)
  const route = useLocation()
  const params = useParams()

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate('/user/login')
  }

  return (
    <div className='sticky top-0'>
      <div className='border-b-2 border-red-600 px-60 py-5 flex justify-between bg-white'>
        <h1 className='font-bold drop-shadow-xl text-red-800 text-xl'>BRAND</h1>
        {/* <ul className='flex space-x-6'>
            <li><NavLink to='/'>Beranda</NavLink></li>
            <li><button onClick={handleProdukDropdown}>Produk</button></li>
            <li>Tentang Kami</li>
        </ul> */}
        <ul className='flex space-x-6'>
          <li></li>
          <li><button onClick={logout}>Log Out</button></li>
        </ul>
      </div>
      {/* <div className=''>
      {open === true ? <Produk/> : ""}
      </div> */}
    </div>

  )
}

export default AuthNavbar