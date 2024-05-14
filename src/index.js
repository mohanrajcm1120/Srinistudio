import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import Portraits from './Portraits';
import Video from './Video';
import Infant from './Infant';
import Wedding from './Wedding';
import Gifts from './Gifts';
import Order from './Order';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/video" element={<Video />} />
        <Route path="/infants" element={<Infant />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();