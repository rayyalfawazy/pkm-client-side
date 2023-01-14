import React from 'react'
import { useState } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

function Produk() {
  return (
    <div className='bg-white px-60 py-10 border rounded-b-lg grid grid-cols-2 gap-5 w-full'>
      <div className='bg-gray-300 py-5 rounded-lg'>
        <h1 className='text-center m-4'><NavLink to='/sampah'>Beli Sampah</NavLink></h1>
      </div>
      <div className='bg-gray-300 py-5 rounded-lg'>
        <h1 className='text-center m-4'><NavLink to='/produk/all'>Beli Produk</NavLink></h1>
      </div>
    </div>
  )
}

function Navbar() {
  const [open, makeOpen] = useState(false);
  const handleProdukDropdown = () => {
    makeOpen(true)
    if (open) {
      makeOpen(false)
    }
  }
  return (
    <div className='sticky top-0'>
      <div className='border-b-2 border-red-600 px-5 lg:px-60 md:px-32 py-5 flex justify-between bg-white'>
        <h1 className='font-bold drop-shadow-xl text-red-800 text-xl'>Bank Sampah Anggur</h1>
        <ul className='hidden md:visible md:flex md:space-x-6'>
            <li><NavLink to='/'>Beranda</NavLink></li>
            <li><button onClick={handleProdukDropdown}>Produk</button></li>
            <li>Tentang Kami</li>
        </ul>
        <ul className='flex space-x-6'>
            <li className='hidden md:inline'><a href='/user/login'>Masuk</a></li>
            <li className='hidden md:inline'><a href='/user/register'>Daftar</a></li>
            <li className='md:hidden'>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                  border='1px'
                />
                <MenuList className='border bg-white space-y-3 p-5'>
                  <MenuItem>
                    <NavLink to='/'>Beranda</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Tentang Kami</NavLink>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <NavLink to='/produk/all'>Produk</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to='/sampah/all'>Sampah</NavLink>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <NavLink to='/user/login'>Masuk</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to='/user/register'>Daftar</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </li>
        </ul>
      </div>
      <div className=''>
      {open ? <Produk/> : ""}
      </div>
    </div>

  )
}

export default Navbar