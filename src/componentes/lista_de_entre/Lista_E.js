import React from 'react';
import "./Lista_E.scss";
import { exportDefaultDeclaration } from '@babel/types';
import Lista from "./Lista"
import ballet from '../imagem/ballet.jpg';
import danca_ventre from '../imagem/dancaventre.jpeg';
import ginastica_artistica from '../imagem/ginastica_A.jpg';
import natacao from '../imagem/natacao.jpeg';
import zumba from '../imagem/zumba.jpeg';
import futsal from '../imagem/futsal.jpeg';
import basquete from '../imagem/basquete.jpeg';

const Lista_E = () =>{
    return(
        <div className="imagem">
            <Lista titulo="Ballet" imagem={ballet} descricao="sdpvihjefoubeuorfbouwreubhrohg"/>
            <Lista titulo="Dança do ventre" imagem={danca_ventre} descricao="sdpvihjefoubeuorfbouwreubhrohg"/>
            <Lista titulo="Ginastica Artistica" imagem={ginastica_artistica} descricao="sdpvihjefoubeuorfbouwreubhrohg"/>
            <Lista titulo="Zumba" imagem={zumba} descricao="sdpvihjefoubeuorfbouwreubhrohg"/>
            <Lista titulo="Natação" imagem={natacao} descricao="sdpvihjefoubeuorfbouwreubhrohg"/>
            <Lista titulo="Futsal" imagem={futsal} descricao="sdpvihjefoubeuorfbouwreubhrohg"/>
            <Lista titulo="Basquete" imagem={basquete} descricao="sdpvihjefoubeuorfbouwreubhrohg"/>
        

        </div>
    )
}

export default Lista_E;