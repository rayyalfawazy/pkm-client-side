import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { ChakraProvider } from '@chakra-ui/react';

axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>

);