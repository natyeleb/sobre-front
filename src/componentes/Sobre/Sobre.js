import React from 'react';
import './Sobre.scss';
import karen from '../imagem/karen.jpeg';
import Thiago from '../imagem/thiagoooo.jpeg';
import Julio from '../imagem/julio.jpeg';
import Douglas from '../imagem/Douglas.jpeg';

const Sobre = () => {
    return(
        <div className="Tudo">
            <h1>Sobre o nosso projeto!</h1>
            <p>Na cidade de Caieiras a população obtinha em certo nível de  dificuldades para realizar inscrições nas atividades oferecidos pela Prefeitura Municipal de Caieiras ,para isso criamos a plataforma digital DESCOMPLICA.<p/>
            No DESCOMPLICA o usuário consegue realizar a sua inscrição nos cursos disponíveis virtualmente. 
            </p>

        <div className="Icones">
           <span> <img src={karen} alt={karen}/></span>
           <span> <img src={Thiago} alt={Thiago}/></span>
           <span> <img src={Julio} alt={Julio}/></span>
           <span> <img src={Douglas} alt={Douglas}/></span>
           <span> <img src={karen} alt={karen}/></span>

        </div>

        </div>
    );
}

export default Sobre;