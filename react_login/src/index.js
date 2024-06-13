import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignIn from './Views/login';
import SignUp from './Views/signup';
import Testimonials from './components/Testimonials';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/home" element={<Testimonials/>}/>

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
