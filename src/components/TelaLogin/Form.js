import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import Esferas from "./Esferas";

export default function Form({ setToken }){

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [desabilitado, setDesabilitado] = React.useState('');
    const [aparecer, setAparecer] = React.useState('block');

    const navigate = useNavigate();
    function cadastrando(e){
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email: email,
            password: senha
        });
        setDesabilitado('disabled');
        setAparecer('none');
        promise.then(response => {
            setDesabilitado('');
            setAparecer('block');
            setToken(response.data.token);
            navigate('/hoje');
        });
        promise.catch(error => {
            alert('Falha na autenticação!');
            setDesabilitado('');
            setAparecer('block');
            setEmail('');
            setSenha('');
        });
    }

    return (
        
        <>
            <Formulario onSubmit = {cadastrando}>
                <input disabled = {desabilitado} type="email" onChange = {(e) => setEmail(e.target.value)} value = {email} placeholder='email'/>
                <input disabled = {desabilitado} type="password" onChange = {(e) => setSenha(e.target.value)} value = {senha} placeholder='senha'/>
                <Botao aparecer = {aparecer} disabled = {desabilitado} type="submit">
                    <h4>Entrar</h4>
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
        display: ${props => props.aparecer}
    }
`;