import React from "react"
import './lista.scss'
import img from '../imagem/ingles.jpeg';
const Lista = ({titulo,imagem,descricao}) =>{
    return(
        <div className="lista">
            <h1>{titulo}</h1>
            <img src={imagem}alt="imagem" />
            <p>{descricao}</p>

            <button>Increva-se</button>
        </div>
    )
    }

export default Lista;

