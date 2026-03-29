import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <nav style={{ 
          display: 'flex', 
          gap: '20px', 
          paddingBottom: '20px', 
          borderBottom: '1px solid #eee',
          marginBottom: '20px' 
        }}>
          <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>Home</Link>
          <Link to="/new" style={{ textDecoration: 'none', color: '#007bff' }}>Nuovo Post</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;