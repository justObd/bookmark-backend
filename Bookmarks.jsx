
import React, { useState, useEffect } from 'react';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/readAll.php');
      const data = await response.json();
      setBookmarks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBookmark = async (id) => {
    try {
      const response = await fetch('http://localhost:3000/api/delete.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
      } else {
        console.error('Failed to delete the bookmark');
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Arial", sans-serif',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: '10px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  };

  const deleteButtonStyle = {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 15px',
    cursor: 'pointer',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: '#e33e3e',
    },
  };

  const infoStyle = {
    flexGrow: 1,
    marginRight: '10px',
  };



  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Bookmarks</h2>
      <ul style={listStyle}>
        {bookmarks.map(bookmark => (
          <li key={bookmark.id} style={listItemStyle}>
            <div style={infoStyle}>
              <strong>Title:</strong> {bookmark.title}<br />
              <strong>URL:</strong> <a href={bookmark.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>{bookmark.link}</a><br />
              <strong>Date Added:</strong> {bookmark.date_added}
            </div>
            <button
              style={deleteButtonStyle}
              onClick={() => deleteBookmark(bookmark.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmarks;

