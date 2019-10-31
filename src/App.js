import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './componentes/navBar/NavBar';
import Home from './componentes/home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ListaE from './componentes/lista_de_entre/Lista_E';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Route exact path='/' component={Home}/>
      <Route path='/entretenimentos' component={ListaE}/>
      </Router>
    </div>
  );
}

export default App;
