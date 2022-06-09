import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Etica from './components/Etica';
import Responsabilidad from './components/Responsabilidad';
import Derechos from './components/Derechos';
import Contacto from './components/Contacto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/etica' element={<Etica />}></Route>
        <Route path='/responsabilidad' element={<Responsabilidad />}></Route>
        <Route path='/derechos-humanos' element={<Derechos />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
