import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Form(){

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    function logando(e){
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email: email,
            senha: senha
        });
        promise.then();
        promise.catch();
    }

    return (

        <>
            <Formulario onSubmit = {logando}>
                <input type="email" onChange = {(e) => setEmail(e.target.value)} value = {email} placeholder='email'/>
                <input type="password" onChange = {(e) => setSenha(e.target.value)} value = {senha} placeholder='senha'/>
                <Botao type="submit"><h4>Entrar</h4></Botao>
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