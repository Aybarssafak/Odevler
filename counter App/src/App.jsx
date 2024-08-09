import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConterApp from './conterApp'; // Capitalized the component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConterApp />} />
      </Routes>
    </Router>
  );
}

export default App;

