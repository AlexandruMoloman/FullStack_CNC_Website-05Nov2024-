import React from 'react';
import NaviBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Заменил Switch на Routes
import Block from './Components/Block';
import AdminPanel from './Components/AdminPanel';
import Home from './Home';
import Technologia from './Technologia';
import Prodotti from './Prodotti';
import Contatti from './Contatti';
import Notizie from './Notizie';

function App() {
  return (
    <>
      <Router>
        <NaviBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologia" element={<Technologia />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/notizie" element={<Notizie text="i am Notizie" />} />
        </Routes>
      </Router>

      <Block />
    </>
  );
}

export default App;
