import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Conteudo(){

    return (
        <ConteudoCompleto>
            <Titulo>
                <h3>Meus Hábitos</h3>
                <Botao>
                    <h3>+</h3>
                </Botao>
            </Titulo>
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
const Botao = styled.div`
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