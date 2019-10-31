import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import NavBar from './componentes/navBar/NavBar';
import home from './componentes/home/Home';
import Cursos from './componentes/cadastro/Cursos.js';

const App =()=> {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route exact path="/" component={home} />
        <Route path="/cursos" component={Cursos} />

      </Router>
    </div>
  );
}

export default App;
