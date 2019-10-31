import React, { useState } from 'react';
import "./Cadastro.scss";
import Input from "./Input";
import Button from './Button';

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [idade, setIdade] = useState ("");
    const [dataNasc, setDatanasc] = useState ("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState ("");
    const [telefone, setTelefone] = useState ("");
    const [email, setEmail] = useState ("");
    const [horario, setHorario] = useState ("");
    const [sexo, setSexo] = useState ("");

    return (
        <div className="Cadastro">
            <h1>Matricule-se aqui!</h1>
            <form>
                <Input
                value={nome}
                type="text"
                label="Nome"
                placeholder="Nome completo"
                atualizarState={setNome}
                obrigatorio
                />            
                <Input
                value={rg}
                type="text"
                label="RG"
                placeholder="RG"
                atualizarState={setRg}
                obrigatorio
                />            
                <Input
                value={cpf}
                type="text"
                label="CPF"
                placeholder="CPF"
                atualizarState={setCpf}
                obrigatorio
                />            
                <Input
                value={idade}
                type="text"
                label="Idade"
                placeholder="Idade"
                atualizarState={setIdade}
                obrigatorio
                />            
                <Input
                value={dataNasc}
                type="text"
                label="Data de Nascimento"
                placeholder="Data de Nascimento"
                atualizarState={setDatanasc}
                obrigatorio
                />                     
                <Input
                value={endereco}
                type="text"
                label="Endereço"
                placeholder="Endereço"
                atualizarState={setEndereco}
                obrigatorio
                />
                <Input
                value={numero}
                type="text"
                label="Número"
                placeholder="Número"
                atualizarState={setNumero}
                obrigatorio
                />
                <Input
                value={telefone}
                type="text"
                label="Telefone"
                placeholder="Telefone"
                atualizarState={setTelefone}
                obrigatorio
                />
                <Input
                value={email}
                type="email"
                label="E-mail"
                placeholder="E-mail"
                atualizarState={setEmail}
                obrigatorio
                />
                <Input
                value={horario}
                type="text"
                label="Horario"
                placeholder="Horario"
                atualizarState={setHorario}
                obrigatorio
                />
                <Input
                value={sexo}
                type="select"
                label="Sexo"
                placeholder="Sexo"
                atualizarState={setSexo}
                obrigatorio
            
                />

            <Button> Cadastrar </Button>


</form>
    </div>
    );
}
export default Cadastro; 