import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import NotFound from './Contents/404nf';
import JenisSampah from './Contents/Sampah dan Produk/JenisSampah';
import Sampah from './Contents/Sampah dan Produk/Sampah';
import { CreateSampah } from './Contents/TambahSampah';
import Produk from './Contents/Sampah dan Produk/Produk';
import DataOngkir from './Contents/Test Place/DataOngkir';
import Dashboard from './Contents/Dashboard';
import { CreateProduk } from './Contents/TambahProduk'; 
import PasswordGet from './Contents/PasswordGet';
import Unauthorized from './Contents/403ua';

export const ProtectedRoutes = (sw) => {
  const auth = {'token':sw} 
  if (auth.token) {
    return <Outlet/>
  }
}



const Router = () => (
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/ongkir' element={<DataOngkir/>}/>
    <Route path='/sampah' element={<JenisSampah/>}/>
    <Route path='/sampah/:jenis' element={<Sampah/>}/>
    <Route path='/produk/' element={<Produk/>}/>
    <Route path='/produk/:jenis' element={<Produk/>}/>
    <Route path='/dashboard' element={<PasswordGet/>}/>
    <Route element={<ProtectedRoutes/>}>
      <Route path='/dashboard/:jenis' element={<Dashboard/>} exact/>
      <Route path='/dashboard/produk/create' element={<CreateProduk/>} exact/>
      <Route path='/dashboard/sampah/create' element={<CreateSampah/>} exact/>
    </Route>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/403' element={<Unauthorized/>}/>
  </Routes>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
);