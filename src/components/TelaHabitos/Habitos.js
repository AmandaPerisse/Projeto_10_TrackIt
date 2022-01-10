import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Logo from "../Global/Logo";
import Rodape from "../Global/Rodape";
import Conteudo from "./Conteudo";

export default function Habitos({ percentage, setPercentage, token, id, name, image }){

    return (
        <Corpo>
            <Cabecalho>
                <Logo />
                <Usuario>
                    <img src = {image} alt = "Usuario" />
                </Usuario>
            </Cabecalho>
            <Conteudo token = {token}/>
            <Rodape percentage = {percentage} />
        </Corpo>
    );
}
const Corpo = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: #E5E5E5;
`;
const Cabecalho = styled.div`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
`;
const Usuario = styled.div`
    background-color: white;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    img{
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;