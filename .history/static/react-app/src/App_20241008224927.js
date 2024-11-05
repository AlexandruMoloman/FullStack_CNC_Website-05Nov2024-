import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Импортируйте ваши компоненты
import Technologia from './Technologia';
import Prodotti from './Prodotti';
import Contatti from './Contatti';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/technologia" component={Technologia} />
        <Route path="/prodotti" component={Prodotti} />
        <Route path="/contatti" component={Contatti} />
      </Switch>
    </Router>
  );
}

export default App;
