import React from "react"
import './Lista_C.scss'
import ing from '../imagem/ingles.jpeg'
import comp from '../imagem/computador.jpeg'
import log from '../imagem/logistica.jpeg'
import adm from '../imagem/adm.jpg'
import lb from '../imagem/libras.jpg'
import ds from '../imagem/desenho.jpg'

import Lista from "./lista";

const ListaC = () =>{
    return(
    <div className="imagem">
 

    <Lista titulo="Inglês" imagem={ing} descricao="Descrição: Curso de inglês gratuito com duração de 1 ano contendo um diploma após a finalização do mesmo."/>
    <Lista titulo="Computação" imagem={comp} descricao="Descrição: Curso de computação gratuito com duração de 6 meses contendo um diploma após a finalização do mesmo."/>
    <Lista titulo="Logística" imagem={log} descricao="Descrição: Curso de logistica gratuito com duração de 2 anos contendo um diploma após a finalização do mesmo."/>
    <Lista titulo="Administração" imagem={adm} descricao="Descrição: Curso de admistração gratuito com duração de 1 anos e 6 meses contendo um diploma após a finalização do mesmo."/>
    <Lista titulo="Libras" imagem={lb} descricao="Descrição: Curso de libras gratuito com duração de 6 meses contendo um diploma após a finalização do mesmo."/>
    <Lista titulo="Desenho" imagem={ds} descricao="Descrição: Curso de desenho gratuito com duração de 6 meses contendo um diploma após a finalização do mesmo."/>


    </div>      
    )
    }

export default ListaC;