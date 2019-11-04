import React from 'react';
import './Home.scss';

import face from '../imagem/facebook (1).png';
import inst from '../imagem/instagram.png';
import you from '../imagem/youtube.png';
import pre from '../imagem/banner2.png';


const Home= () =>{
    return(
        <div className="Home">
        <div className="imagem">
            <img src={pre} alt="prefeitura"/>
        </div>
        <aside>
            <p>BEM VINDO AO DESCOMPLICA</p>
            <p>AQUI VOCÊ PODE SE CADASTRAR EM VARIOS CURSOS E ENTRETENIMETOS DISPONIBILIZADOS PELA PREFEITURA DE CAIEIRAS</p>
        </aside>
        <footer>
            <div className="icone">
                <a href="https://www.facebook.com/prefeituradecaieiras/"><img src={face} alt="icone"/></a>
                <a href="https://www.instagram.com/prefeituradecaieiras/?hl=en"><img src={inst} alt="icone"/></a>
                <a href="https://www.youtube.com/channel/UC8HmvPNj3KIQFUZgWdfxcDQ"><img src={you} alt="icone"/></a>
            </div>
        </footer>
        </div>
    )
}

export default Home;