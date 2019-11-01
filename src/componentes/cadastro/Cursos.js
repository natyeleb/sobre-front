import React, { useState } from 'react';
import Input from './Input';
//import { Link } from 'react-router-dom';
import './Cursos.scss';
import Button from './Button';

const Curso = () => {
    const [nome, setNome] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf  ] = useState("");
    const [idade, setIdade] = useState(0);
    const [nascimento , setNascimento] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [horario, setHorario] = useState("");
    const [sexo, setSexo] = useState("");


    return(
    <div className="cadastro">
        
        <h1>Matricule-se aqui!</h1>
        <form>
    
            <Input 
            type="Nome" 
            label="Nome" 
            placeholder="Digite o nome"
            atualizarState={setNome}
            value={nome}
            obrigatorio
            />

            <Input 
            type="text" 
            label="Rg" 
            placeholder="Digite seu Rg"
            atualizarState={setRg}
            value={rg}
            obrigatorio
            />

            <Input 
            type="text" 
            label="Cpf" 
            placeholder="Digite seu Cpf"
            atualizarState={setCpf}
            value={cpf}
            obrigatorio
            />
            
            <Input 
            type="text" 
            label="Idade" 
            placeholder="Idade"
            atualizarState={setIdade}
            value={idade}
            />

            <Input 
            type="text" 
            label="Data de Nascimento" 
            placeholder="Data de Nascimento"
            atualizarState={setNascimento}
            value={nascimento}
            />

            <Input 
            type="text" 
            label="Endereço" 
            placeholder="Endereço"
            atualizarState={setEndereco}
            value={endereco}
            />

            <Input 
            type="text" 
            label="Número de residência" 
            placeholder="Número de residência"
            atualizarState={setNumero}
            value={numero}
            />

            <Input 
            type="text" 
            label="Telefone" 
            placeholder="Digite seu Telefone"
            atualizarState={setTelefone}
            value={telefone}
            />

            <Input 
            type="email" 
            label="Email" 
            placeholder="Digite seu email"
            atualizarState={setEmail}
            value={email}
            />
            
            <Input 
            type="text" 
            label="Horário" 
            placeholder="Horário"
            atualizarState={setHorario}
            value={horario}
            />

            <Input 
            type="select" 
            option value="Masculino"
            option value="Feminino"
            label="Sexo" 
            placeholder="Digite seu sexo"
            atualizarState={setSexo}
            value={sexo}
            />
        


           <Button>Cadastrar</Button> 
        
            </form> 
        </div>
    );
}

export default Curso;
