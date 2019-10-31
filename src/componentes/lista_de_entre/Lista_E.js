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
            <Lista titulo="Ballet" imagem={ballet} descricao="As aulas de ballet classico que são oferecidas pela Prefeitura Municipal de Caieiras gratuitamente para pessoas de 4 á 35 anos de idade."/>
            <Lista titulo="Dança do ventre" imagem={danca_ventre} descricao=""/>
            <Lista titulo="Ginastica Artistica" imagem={ginastica_artistica} descricao=""/>
            <Lista titulo="Zumba" imagem={zumba} descricao=""/>
            <Lista titulo="Natação" imagem={natacao} descricao=""/>
            <Lista titulo="Futsal" imagem={futsal} descricao=""/>
            <Lista titulo="Basquete" imagem={basquete} descricao=""/>
        

        </div>
    )
}

export default Lista_E;