import React from 'react';
import '../home/Home.scss';
import NavBar from '../navBar/NavBar';
import face from '../imagem/facebook (1).png';
import inst from '../imagem/instagram.png';
import you from '../imagem/youtube.png';
import pre from '../imagem/img.jpg';
const Home= () =>{
    return(
        <div className="home">
        <NavBar />
        <div className="imagem">
            <img src={pre} alt="prefeitura"/>
        </div>
        <footer>
            <div className="icone">
                <a href="https://www.facebook.com/prefeituradecaieiras/"><img src={face} alt="icone"/></a>
                <a href="https://www.instagram.com/prefeituradecaieiras/?hl=en"><img src={inst} alt="icone"/></a>
                <a href="https://www.youtube.com/channel/UC8HmvPNj3KIQFUZgWdfxcDQ"><img src={you} alt="icon"/></a>
            </div>
        </footer>
        </div>
    )
}

export default Home;