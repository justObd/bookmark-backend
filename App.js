// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file

import Bookmarks from './components/Bookmarks';
import BookmarkForm from './components/BookmarkForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bookmark App</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          
            <li><Link to="/add">Add Bookmark</Link></li>
          </ul>
        </nav>

        <hr />

        <div className="container">
          <Routes>
            <Route path="/" element={<Bookmarks />} />
           
            <Route path="/add" element={<BookmarkForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
