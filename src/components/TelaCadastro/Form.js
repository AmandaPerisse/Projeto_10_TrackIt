import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

export default function Form(){

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [imagem, setImagem] = React.useState('');

    function Cadastrando(e){
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email: email,
            nome: nome,
            imagem: imagem,
            senha: senha
        });
        promise.then();
        promise.catch();
    }

    return (
        
        <>
            <Formulario onSubmit = {Cadastrando}>
                <input type="email" onChange = {(e) => setEmail(e.target.value)} value = {email} placeholder='email'/>
                <input type="password" onChange = {(e) => setSenha(e.target.value)} value = {senha} placeholder='senha'/>
                <input type="text" onChange = {(e) => setNome(e.target.value)} value = {nome} placeholder='nome' />
                <input type="text" onChange = {(e) => setImagem(e.target.value)} value = {imagem} placeholder='imagem' />
                <Botao type="submit"><h4>Cadastrar</h4></Botao>
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