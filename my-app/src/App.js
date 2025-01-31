import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/pratice';
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 로그인페이지 */}
          <Route path="/" element={<LoginPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
