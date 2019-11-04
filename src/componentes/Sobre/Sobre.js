import React from 'react';
import './Sobre.scss';
import karen from '../imagem/karen.jpeg';
import Thiago from '../imagem/thiagoooo.jpeg';
import Julio from '../imagem/julio3.jpeg';
import Douglas from '../imagem/Douglas.jpeg';
import Natyele from '../imagem/Natyele.jpeg';

const Sobre = () => {
    return(
        <div className="Tudo">
            <h1>Sobre o nosso projeto!</h1>
            <p>Na cidade de Caieiras a população obtinha em certo nível de  dificuldades para realizar inscrições nas atividades oferecidos pela Prefeitura Municipal de Caieiras ,para isso criamos a plataforma digital <span className="Negrito">DESCOMPLICA</span>.<p/>
            No <span className="Negrito">DESCOMPLICA</span> o usuário consegue realizar a sua inscrição nos cursos disponíveis virtualmente. 
            </p>

            <h2>DESENVOLVEDORES:</h2>
        
        <div className="Icones">
           <span> <img src={karen} alt={karen}/>Karen Nunes</span>
           <span> <img src={Thiago} alt={Thiago}/>Thiago Mendes</span>
           <span> <img src={Julio} alt={Julio}/>Julio Cesar</span>
           <span> <img src={Douglas} alt={Douglas}/>Douglas Klemes</span>
           <span> <img src={Natyele} alt={Natyele}/>Natyele Bertolani</span>

        </div>

        </div>
    );
}

export default Sobre;