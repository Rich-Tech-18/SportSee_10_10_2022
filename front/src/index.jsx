import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './index.css';
import Header from './compenents/Header/Header';
import Dashboard from './compenents/Dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/:idUser" element={<Dashboard />}></Route>
        <Route path="/*" element={<Navigate to ="/"> </Navigate>}></Route>
    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
