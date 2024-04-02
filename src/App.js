import React from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
      {/* <div className="flex"> */}
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
