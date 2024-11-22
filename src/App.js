import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LearnHub from './pages/LearnHub';
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter
      //  basename='/learnhub'
       >
        <Routes>
          <Route path='/' element={<LearnHub />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
