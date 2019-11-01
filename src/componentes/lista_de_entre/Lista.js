import React from "react";
import './Lista.scss';
import { Link } from 'react-router-dom';
import img from '../imagem/ballet.jpg';
import ims from '../imagem/dancaventre.jpeg';

const Lista = ({titulo,imagem,descricao}) =>{
    return(
        <div className="Lista">
            <h1>{titulo}</h1>
            <img src={imagem} alt="imagem" />
            <p>{descricao}</p>
           
          <Link to="/"><button> Inscreva-se</button></Link>
           
           <div></div>
        </div>
    )

}
export default Lista;