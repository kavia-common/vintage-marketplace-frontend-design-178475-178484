import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

/**
 * PUBLIC_INTERFACE
 * App - root component that sets up routes and global layout (Header/Footer).
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app-shell" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: '1 1 auto' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
