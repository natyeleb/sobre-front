import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';
import NavBar from './componentes/navBar/NavBar';
import Home from './componentes/home/Home';
import entretenimentos from './componentes/entreterimentos/Cadastro';



const App = () => {
  return (
    <Router>
      <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cadastrarenter" component={entretenimentos}/>

    </Router>
    
  );
}

export default App;
