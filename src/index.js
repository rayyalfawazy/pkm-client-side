import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import NotFound from './Contents/404nf';
import JenisSampah from './Contents/Sampah dan Produk/JenisSampah';
import Sampah from './Contents/Sampah dan Produk/Sampah';
import Login from './Contents/Login Register/Login';
import Register from './Contents/Login Register/Register';
import { CreateSampah } from './Contents/Dashboard/TambahSampah';
import Produk from './Contents/Sampah dan Produk/Produk';
import Dashboard from './Contents/Dashboard/Dashboard';
import { CreateProduk } from './Contents/Dashboard/TambahProduk'; 
import Unauthorized from './Contents/403ua';
import PasswordGet from './Contents/Dashboard/PasswordGet';
import { EditSampah } from './Contents/Dashboard/EditSampah';
import { EditProduk } from './Contents/Dashboard/EditProduk';
import Pembukuan from './Contents/Dashboard/Pembukuan';
import { CreatePembukuan } from './Contents/Dashboard/TambahPembukuan';
import { EditPembukuan } from './Contents/Dashboard/EditPembukuan';

export const ProtectedRoutes = (sw) => {
  const auth = {'token':sw} 
  if (auth.token) {
    return <Outlet/>
  } else {
    return <Unauthorized/>
  }
}



const Router = () => (
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/sampah' element={<JenisSampah/>}/>
    <Route path='/sampah/:jenis' element={<Sampah/>}/>
    <Route path='/produk/' element={<Produk/>}/>
    <Route path='/produk/:jenis' element={<Produk/>}/>
    <Route path='/dashboard' element={<PasswordGet/>} exact/>
    <Route element={<ProtectedRoutes/>}>
      <Route path='/dashboard/:jenis' element={<Dashboard/>} exact/>
      <Route path='/dashboard/produk/edit/:id' element={<EditProduk/>} exact/>
      <Route path='/dashboard/produk/create' element={<CreateProduk/>} exact/>
      <Route path='/dashboard/sampah/edit/:id' element={<EditSampah/>} exact/>
      <Route path='/dashboard/sampah/create' element={<CreateSampah/>} exact/>
    </Route>
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