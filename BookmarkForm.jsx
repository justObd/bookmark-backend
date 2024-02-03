import React, { useState } from 'react';

const BookmarkForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    URL: '',
  });

  

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const inputStyle = {
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  

  const handleChange = e => {
    setFormData({
      title: e.target.name === 'title' ? e.target.value : formData.title,
      URL: e.target.name === 'URL' ? e.target.value : formData.URL,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

 
        fetch('http://localhost:3000/api/create.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            mode: 'no-cors', // Not recommended for most use cases
            body: JSON.stringify(formData),
          });
          


    setFormData({
      title: '',
      URL: '',
    });
    
  };

  return (
    <div>
      <h2>Add Bookmark</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required style={inputStyle} />
        <label>URL:</label>
        <input type="text" name="URL" value={formData.URL} onChange={handleChange} required style={inputStyle} />
        <button type="submit">Add Bookmark </button>
      </form>
    </div>
  );
};

export default BookmarkForm;
