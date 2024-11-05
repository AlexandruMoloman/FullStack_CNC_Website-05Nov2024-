import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Technologia from './Technologia';
import Prodotti from './Prodotti';
import Contatti from './Components/Contatti';

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

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
