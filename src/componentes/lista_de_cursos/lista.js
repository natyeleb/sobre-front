import React from "react"
import './lista.scss'
import { Link } from 'react-router-dom'
import img from '../imagem/ingles.jpeg';
const Lista = ({titulo,imagem,descricao}) =>{
    return(
        <div className="lista">
            <h1>{titulo}</h1>
            <img src={imagem}alt="imagem" />
            <p>{descricao}</p>

            <Link to="/cadastrocursos"><button>Increva-se</button></Link>
        </div>
    )
    }

export default Lista;

