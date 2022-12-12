import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Contents/404nf';
import JenisSampah from './Contents/Sampah dan Produk/JenisSampah';
import Sampah from './Contents/Sampah dan Produk/Sampah';
import Produk from './Contents/Sampah dan Produk/Produk';

const Router = () => (
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/sampah' element={<JenisSampah/>}/>
    <Route path='/sampah/:jenis' element={<Sampah/>}/>
    <Route path='/produk/' element={<Produk/>}/>
    <Route path='/produk/:jenis' element={<Produk/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
);