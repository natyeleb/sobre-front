import React from 'react';
import './Sobre.scss';
import karen from '../imagem/karen.jpeg';
import Thiago from '../imagem/thiagoooo.jpeg';

const Sobre = () => {
    return(
        <div className="Tudo">
            <h1>Sobre o nosso projeto!</h1>
            <p>Na cidade de Caieiras a população obtinha em certo nível de  dificuldades para realizar inscrições nas atividades oferecidos pela Prefeitura Municipal de Caieiras ,para isso criamos a plataforma digital DESCOMPLICA.<p/>
            No DESCOMPLICA o usuário consegue realizar a sua inscrição nos cursos disponíveis virtualmente. 
            </p>

        <section className="icones">
            <span img={karen} alt={karen}></span>
            
            <span img={Thiago} alt={Thiago}></span>
        </section>

        </div>
    );
}

export default Sobre;