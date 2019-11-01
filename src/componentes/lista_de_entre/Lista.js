import React from "react";
import './Lista.scss';
import img from '../imagem/ballet.jpg';
import ims from '../imagem/dancaventre.jpeg';

const Lista = ({titulo,imagem,descricao}) =>{
    return(
        <div className="Lista">
            <h1>{titulo}</h1>
            <img src={imagem} alt="imagem" />
            <p>{descricao}</p>
           
           <button> INCREVA-SE</button>
           <div></div>
        </div>
    )

}
export default Lista;