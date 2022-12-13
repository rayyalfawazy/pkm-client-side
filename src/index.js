import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Contents/404nf';
import JenisSampah from './Contents/Sampah dan Produk/JenisSampah';
import Sampah from './Contents/Sampah dan Produk/Sampah';
import Produk from './Contents/Sampah dan Produk/Produk';
import Login from './Contents/Login Register/Login';
import Register from './Contents/Login Register/Register';

// export const ProtectedRoutes = (sw) => {
//   const auth = {'token':sw} 
//   if (auth.token) {
//     return <Outlet/>
//   } else {
//     return <Unauthorized/>
//   }
// }



const Router = () => (
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/sampah' element={<JenisSampah/>}/>
    <Route path='/sampah/:jenis' element={<Sampah/>}/>
    <Route path='/produk/' element={<Produk/>}/>
    <Route path='/produk/:jenis' element={<Produk/>}/>
    {/* <Route element={<ProtectedRoutes/>}>
      <Route path='/dashboard/:jenis' element={<Dashboard/>} exact/>
      <Route path='/dashboard/produk/edit/:id' element={<EditProduk/>} exact/>
      <Route path='/dashboard/produk/create' element={<CreateProduk/>} exact/>
      <Route path='/dashboard/sampah/edit/:id' element={<EditSampah/>} exact/>
      <Route path='/dashboard/sampah/create' element={<CreateSampah/>} exact/>
    </Route> */}
    <Route path='/user/login' element={<Login/>}/>
    <Route path='/user/register' element={<Register/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
);