import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Contents/404nf';
import JenisSampah from './Contents/Sampah dan Produk/JenisSampah';
import Sampah from './Contents/Sampah dan Produk/Sampah';
import { CreateSampah } from './Contents/TambahSampah';
import Produk from './Contents/Sampah dan Produk/Produk';
import DataOngkir from './Contents/Test Place/DataOngkir';
import Dashboard from './Contents/Dashboard';
import { CreateProduk } from './Contents/TambahProduk'; 

const ProtectedRoute = () => {

} 

const Router = () => (
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/ongkir' element={<DataOngkir/>}/>
    <Route path='/sampah' element={<JenisSampah/>}/>
    <Route path='/sampah/:jenis' element={<Sampah/>}/>
    <Route path='/produk/' element={<Produk/>}/>
    <Route path='/produk/:jenis' element={<Produk/>}/>
    <Route path='/dashboard/:jenis' element={<Dashboard/>}/>
    <Route path='/dashboard/produk/create' element={<CreateProduk/>}/>
    <Route path='/dashboard/sampah/create' element={<CreateSampah/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
);