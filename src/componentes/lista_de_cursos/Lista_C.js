import React from "react"
import './Lista_C.scss'
import ing from '../imagem/ingles.jpeg'
import Lista from "./lista";

const ListaC = () =>{
    return(
    <div className="imagem">
 

    <Lista titulo="Englês" imagem={ing} descricao="Descrição: Curso de inglês gratuito com duração de 1 ano contendo um diploma após a finalização do mesmo."/>
       
    
    </div>      
    )
    }

export default ListaC;