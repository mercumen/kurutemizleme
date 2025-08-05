import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Anasayfa from './routes/anasayfa';
import Fiyatlarımız from './routes/fiyatlarımız';
import Contact from './routes/Contact';
import AdminPanel from './routes/AdminPanel';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Anasayfa" element={<Anasayfa />} />
      <Route path="/fiyatlarımız" element={<Fiyatlarımız />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AdminPanel" element={<AdminPanel />} />
    </Routes>
  </BrowserRouter>
  
);
