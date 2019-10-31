import React from 'react';
import "./Lista_E.scss";
import { exportDefaultDeclaration } from '@babel/types';
import Balé from "../imagem/balé.jpg";

const Lista_E = () =>{
    return(
        <div className="Entretenimentos">
            <h1>Balé</h1>
        <img src={Balé} alt="balé"/>
        <p> oiihgiuhgiohjti rjp65to</p>
        

        </div>
    )
}

export default Lista_E;