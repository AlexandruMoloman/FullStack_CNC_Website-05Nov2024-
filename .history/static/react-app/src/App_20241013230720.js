import React, { useState } from 'react';
import NaviBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Заменил Switch на Routes
import Block from './Components/Block';
import AdminPanel from './Components/AdminPanel';
import Home from './Home';
import Technologia from './Technologia';
import Prodotti from './Prodotti';
import Contatti from './Contatti';

function App() {
  const [content, setContent] = useState({
    text: 'Your Text',
    Image: 'null',
  });

  const handleUpdate = (newText, newImage) => {
    setContent({ text: newText, image: newImage });
  };
  return (
    <>
      <Router>
        <NaviBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologia" element={<Technologia />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>

        <AdminPanel content={content} onUpdate={handleUpdate} />
      </Router>
      <Block />
      <div>
        <h2>{content.text}</h2>
        {content.image && <img src={URL.createObjectURL(content.image)} alt="Uploaded" />}
      </div>
    </>
  );
}

export default App;
