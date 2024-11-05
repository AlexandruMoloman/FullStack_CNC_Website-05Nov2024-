import React, { useState } from 'react';

const AdminPanel = ({ content, onUpdate }) => {
  const [newText, setNewText] = useState(content.txt);
  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(newText, newImage);
  };

  return (
    <div>
      <h2>AdminPanel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text:</label>
          <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
        </div>
        <div>
          <label>Image:</label>
          <input type="Image" onChange={handleImageChange} />
        </div>
        <button type="submit">Salva</button>
      </form>
    </div>
  );
};

export default AdminPanel;
