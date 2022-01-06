import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';

import Habitos from './ListaHabitos';
import Form from './Form';

export default function Conteudo({ token }){

    const [id, setId] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [dias, setDias] = React.useState('');
    const [listaHabitos, setListaHabitos] = React.useState('');
    const [aparecerMensagem, setAparecerMensagem] = React.useState('');
    const [aparecerCriacaoHabitos, setAparecerCriacaoHabitos] = React.useState('none');

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then(response => {
            setListaHabitos(response.data);
            if (response.data.length === 0){
                setAparecerMensagem('none');
            }
            else{
                setAparecerMensagem('block');
            }
        });
    }, []);
    return (
        <ConteudoCompleto>
            <Titulo>
                <h3>Meus Hábitos</h3>
                <Botao onClick = {() => setAparecerCriacaoHabitos('block')}>
                    <h3>+</h3>
                </Botao>
            </Titulo>
            <CriarHabito aparecerCriacaoHabitos = {aparecerCriacaoHabitos}>
                <Form />
            </CriarHabito>
            <Habitos habitos = {listaHabitos} aparecer = {aparecerMensagem}/>
        </ConteudoCompleto>
    );
}
const ConteudoCompleto = styled.div`
    margin-top: 90px;
    margin-bottom: 80px;
    padding: 50px 20px;
    h3{
        color: #126BA5;
    }
`;
const Titulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Botao = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #52B6FF;
    width: 40px;
    height: 35px;
    border-radius: 4.63636px;
    h3{
        color: white;
    }
`;
const CriarHabito = styled.div`
    display: ${props => props.aparecerCriacaoHabitos};
    margin-top: 20px;
`;