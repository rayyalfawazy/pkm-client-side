import Navbar from './Components/Navbar';
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMe } from './Feature/AuthSlice';

function App() {
  const images = 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  const {isSuccess} = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMe())
  },[dispatch])

  useEffect(()=>{
    if (isSuccess) {
        navigate('/dashboard/sampah')
    }
},[isSuccess, navigate])
  return (
    <div>
      <Helmet>
        <title>Title | Beranda</title>
      </Helmet>
      <Navbar/>
      <div>
        <img className='w-full object-none object-bottom h-[870px]' src={images} alt='images'/>
      </div>
      <section className='mt-20 mb-20 mx-60'>
        <div>
          <h1 className='mb-10 text-2xl font-bold uppercase text-center'>Brand</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper porta semper. Quisque ultrices nulla quam. Mauris mauris leo, viverra vel suscipit varius, porta ullamcorper quam. Aenean blandit neque in mi molestie, vitae dignissim odio posuere. Ut sed urna quis neque tristique ornare ullamcorper vitae orci.</p>
        </div>
        <div className='mt-32'>
          <ul className='grid grid-row-1 grid-cols-3 gap-10'>
            <li>
              <h1 className='font-bold text-4xl mb-5'>Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ante, semper quis metus vel, efficitur mollis dolor.</p>
            </li>
            <li className='col-span-2 row-span-2'>
              <img src={images} alt='images' className='rounded-lg object-cover h-64 w-full'/>
            </li>
            <li>
              <h1 className='font-bold text-4xl mb-5'>Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ante, semper quis metus vel, efficitur mollis dolor.</p>
            </li>
            <li>
              <h1 className='font-bold text-4xl mb-5'>Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ante, semper quis metus vel, efficitur mollis dolor.</p>
            </li>

            <li>
              <h1 className='font-bold text-4xl mb-5'>Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ante, semper quis metus vel, efficitur mollis dolor.</p>
            </li>
            <li>
              <h1 className='font-bold text-4xl mb-5'>Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ante, semper quis metus vel, efficitur mollis dolor.</p>
            </li>
          </ul>
        </div>
        <div className='mt-32'>
          <h1 className='mb-10 text-2xl font-bold text-center'>Mengapa Pilih Brand?</h1>
          <ul className='grid grid-cols-3 gap-10'>
            <li className='p-48 shadow-md hover:shadow-2xl duration-100'>Item</li>
            <li className='p-48 shadow-md hover:shadow-2xl duration-100'>Item</li>
            <li className='p-48 shadow-md hover:shadow-2xl duration-100'>Item</li>
            <li className='p-48 shadow-md hover:shadow-2xl duration-100'>Item</li>
            <li className='p-48 shadow-md hover:shadow-2xl duration-100'>Item</li>
            <li className='p-48 shadow-md hover:shadow-2xl duration-100'>Item</li>
          </ul>
        </div>
      </section>
      <footer className='bg-gray-500 py-16 px-60'>
        <p className='text-white'>©Brand 2022 - All rights reserved</p>
        <p className='text-white'>Institut Teknologi Indonesia.</p>
      </footer>
    </div>
  );
}

export default App;
