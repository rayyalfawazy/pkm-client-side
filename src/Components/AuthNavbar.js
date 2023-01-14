import { useState } from 'react'
import { useNavigate, useParams, useLocation, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, reset } from '../Feature/AuthSlice'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

function AuthNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, makeOpen] = useState(false);
  const { user } = useSelector((state) => state.auth)
  const route = useLocation()
  const params = useParams()

  const logout = async () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate('/')
  }

  const handleProdukDropdown = () => {
    makeOpen(true)
    if (open === true) {
      makeOpen(false)
    }
  }

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

  return (
    <div className='sticky top-0'>
      <div className='border-b-2 border-red-600 px-5 lg:px-60 md:px-32 py-5 flex justify-between bg-white'>
        <h1 className='font-bold drop-shadow-xl text-red-800 text-xl'>BRAND</h1>
        <ul className='hidden md:visible md:flex md:space-x-6'>
            <li><NavLink to='/'>Beranda</NavLink></li>
            <li><button onClick={handleProdukDropdown}>Produk</button></li>
            <li>Tentang Kami</li>
        </ul>
        <Menu>
          <MenuButton
            px={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            {user.name} <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            {user.role !== 'user' ?
              <MenuItem><a href='/dashboard/sampah'>Dashboard</a></MenuItem>
            : "" }
            <MenuItem>Profile</MenuItem>
            <MenuDivider />
            <MenuItem onClick={logout}><NavLink to='/'>Log Out</NavLink></MenuItem>
          </MenuList>
        </Menu>
        {/* <ul className='flex space-x-6'>
          <li><button onClick={logout}>{user.name}</button></li>
        </ul> */}
      </div>
      <div className=''>
      {open === true ? <Produk/> : ""}
      </div>
    </div>

  )
}

export default AuthNavbar