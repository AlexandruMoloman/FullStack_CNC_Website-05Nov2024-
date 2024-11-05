import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Technologia from './Technologia';
import Prodotti from './Prodotti';
import Contatti from './Contatti';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologia" element={<Technologia />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
