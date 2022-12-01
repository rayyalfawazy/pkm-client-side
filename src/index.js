import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Contents/404nf';
import Sampah from './Contents/Sampah dan Produk/Sampah';

const Router = () => (
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/sampah' element={<Sampah/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
);