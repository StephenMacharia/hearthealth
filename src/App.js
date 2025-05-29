import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import HeartDiseasePredictor from './components/HeartDiseasePredictor';

function App() {
  return (
    <Router>
      <div className="App">

     
    </div>
      <Routes>
        <Route path="/" element={<HeartDiseasePredictor/>} />

      </Routes>
    </Router>

  );
}

export default App;
