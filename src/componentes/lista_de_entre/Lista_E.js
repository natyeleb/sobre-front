import React from 'react';
import "./Lista_E.scss";
import { exportDefaultDeclaration } from '@babel/types';
import Lista from "./Lista"
import img from '../imagem/ballet.jpg';

const Lista_E = () =>{
    return(
        <div className="imagem">
            <Lista titulo="Ballet" imagem={img} descricao="sdpvihjefoubeuorfbouwreubhrohg"/>
        

        </div>
    )
}

export default Lista_E;