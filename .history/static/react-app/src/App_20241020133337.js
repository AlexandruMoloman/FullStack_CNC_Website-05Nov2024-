import React from 'react';
import NaviBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Block from './Components/Block';
import ScrollToTop from './Components/ScrollToTop'; // Импортируем компонент

import Home from './Pages/Home';
import Technologia from './Pages/Technologia';
import Prodotti from './Pages/Prodotti';
import Contatti from './Pages/Contatti';
import Notizie from './Pages/Notizie';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* Добавляем компонент, чтобы всегда скроллить вверх */}
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologia" element={<Technologia />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/contatti" element={<Contatti text="i am Contatti" />} />
          <Route path="/notizie" element={<Notizie text="i am Notizie" />} />
        </Routes>
      </Router>

      <Block />
    </>
  );
}

export default App;
