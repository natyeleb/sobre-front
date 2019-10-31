import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './componentes/navBar/NavBar';
import Home from './componentes/home/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ListaC from './componentes/lista_de_cursos/Lista_C.js'

const App = () => {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/cursos" component={ListaC}/>

      </Router>
    </div>
  );
}

export default App;
