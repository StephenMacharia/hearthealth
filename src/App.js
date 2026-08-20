import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './pages/LandingPage';
import HeartDiseasePredictor from './components/HeartDiseasePredictor';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/assessment" element={<HeartDiseasePredictor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
