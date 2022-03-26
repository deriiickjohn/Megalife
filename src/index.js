import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Home1 from './components/pages/Home1';
import Home2 from './components/pages/Home2';
import Home3 from './components/pages/Home3';
import Home4 from './components/pages/Home4';
import Home5 from './components/pages/Home5';

ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="home1" element={<Home1 />}></Route>
        <Route path="home2" element={<Home2 />}></Route>
        <Route path="home3" element={<Home3 />}></Route>
        <Route path="home4" element={<Home4 />}></Route>
        <Route path="home5" element={<Home5 />}></Route>

      </Route>
    </Routes>
  
  </BrowserRouter>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
