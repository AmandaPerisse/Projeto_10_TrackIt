import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';

import Form from './Form';

export default function Conteudo({ token }){

    const [id, setId] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [dias, setDias] = React.useState('');
    const [listaHabitos, setListaHabitos] = React.useState('null');
    const [aparecerMensagem, setAparecerMensagem] = React.useState('none');
    const [aparecerCriacaoHabitos, setAparecerCriacaoHabitos] = React.useState('none');

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then(response => {
            if (response.data.length < 1){
                setAparecerMensagem('block');
            }
            else{
                setAparecerMensagem('none');
            }
            setListaHabitos(response.data);
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
                <Form token = {token} setAparecerCriacaoHabitos = {setAparecerCriacaoHabitos} />
            </CriarHabito>
            <Texto >
                <h5>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </h5>
            </Texto>
            <Fundo>
                <Habito>
                    <h4>
                        {listaHabitos[0].name}
                    </h4>
                </Habito>
                <div>
                    <Botao2>
                        <h4>D</h4>
                    </Botao2>
                    <Botao2>
                        <h4>S</h4>
                    </Botao2>
                    <Botao2>
                        <h4>T</h4>
                    </Botao2>
                    <Botao2>
                        <h4>Q</h4>
                    </Botao2>
                    <Botao2>
                        <h4>Q</h4>
                    </Botao2>
                    <Botao2>
                        <h4>S</h4>
                    </Botao2>
                    <Botao2>
                        <h4>S</h4>
                    </Botao2>
                </div>
            </Fundo>
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
const Habito = styled.div`
    
`;
const DiasCompleto = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    pointer-events: ${props => props.desabilitar};
    #${props => props.listaHabitos[0].days[0]}{
        background-color: black;
    }
`;
const Botao2 = styled.button`
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    width: 30px;
    height: 30px;
    margin-top: 5px;
    margin-right: 5px;
    h4{
        color: #D5D5D5;
    }
`;
const Texto = styled.div`
    display: ${props => props.aparecerMensagem};
`;
const Fundo = styled.div`
    background-color: white;
    padding: 15px;
    margin-top: 20px;
`;