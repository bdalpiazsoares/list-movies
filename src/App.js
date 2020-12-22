import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home/Home';

import './App.css'

function App() {
  return (
    <div className='App'>
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
