import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

import Esferas from "./Esferas";

export default function Form(){

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [imagem, setImagem] = React.useState('');
    const [desabilitado, setDesabilitado] = React.useState('');

    function cadastrando(e){
        e.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email: email,
            name: nome,
            image: imagem,
            password: senha
        });
        setDesabilitado('disabled');
        promise.then(response => console.log(response),);
        promise.catch(error => console.log(error.response));
    }

    return (
        
        <>
            <Formulario onSubmit = {cadastrando}>
                <input {...desabilitado} type="email" onChange = {(e) => setEmail(e.target.value)} value = {email} placeholder='email'/>
                <input {...desabilitado} type="password" onChange = {(e) => setSenha(e.target.value)} value = {senha} placeholder='senha'/>
                <input {...desabilitado} type="text" onChange = {(e) => setNome(e.target.value)} value = {nome} placeholder='nome' />
                <input {...desabilitado} type="text" onChange = {(e) => setImagem(e.target.value)} value = {imagem} placeholder='imagem' />
                <Botao {...desabilitado} type="submit">
                    <h4>Cadastrar</h4>
                    <Esferas escondido = {desabilitado} />
                </Botao>
            </Formulario>
        </>
    );
}

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`;
const Botao = styled.button`
	background-color: #52B6FF;
    width: 303px;
    height: 45px;
    border-radius: 4.63636px;
    h4{
        color: white;
    }
`;