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
import voleibol from '../imagem/volei.jpeg';

const Lista_E = () =>{
    return(
        <div className="imagem">
            <Lista titulo="Ballet" imagem={ballet} descricao="As aulas de ballet classico que são oferecidas pela Prefeitura Municipal de Caieiras gratuitamente para pessoas de 4 á 35 anos de idade."/>
            <Lista titulo="Dança do ventre" imagem={danca_ventre} descricao="As aulas de dança do ventre são oferecidas pela Prefeitura Municipal de Caieiras gratuitamente para pessoas maiores de 18 anos de idade."/>
            <Lista titulo="Ginastica Artistica" imagem={ginastica_artistica} descricao="As aulas de ginastica artistica são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras para pessoas com mais de 10 anos de idade."/>
            <Lista titulo="Zumba" imagem={zumba} descricao="As aulas de zumba são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras para pessoas de todas as idades. "/>
            <Lista titulo="Natação" imagem={natacao} descricao="As aulas de natação são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras para pessoas maiores de 10 anos de idade."/>
            <Lista titulo="Futsal" imagem={futsal} descricao="As aulas de futsal são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras para pessoas maiores de 10 anos de idade."/>
            <Lista titulo="Basquete" imagem={basquete} descricao="As aulas de basquete são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras para pessoas de 10 até 25 anos de idade."/>
            <Lista titulo="Voleibol" imagem={voleibol} descricao="As aulas de voleibol são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras para pessoas maiores de 13 anos de idade."/>
        

        </div>
    )
}

export default Lista_E;