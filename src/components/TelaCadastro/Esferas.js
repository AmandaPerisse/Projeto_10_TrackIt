import React from 'react';
import styled from 'styled-components';

export default function Esferas({ desabilitado }){

    let aparecer = "none";
    if (desabilitado === "disabled"){
        aparecer = "flex";
    }

    return (

        <EsferasCompleto aparecer = {aparecer}>
            <Esfera1></Esfera1>
            <Esfera2></Esfera2>
            <Esfera1></Esfera1>
        </EsferasCompleto>
    );
}

const EsferasCompleto = styled.div`
	display: ${props => props.aparecer};
    align-items: center;
    justify-content: space-between;
    width: 55px;
    margin: 0 auto;
    
`;
const Esfera1 = styled.div`
	background-color: white;
    border-radius: 100%;
    animation: esfera1 1s linear infinite;
    @keyframes esfera1 {
        0% {
            width: 15px;
            height: 15px;
        }
    
        50% {
            width: 10px;
            height: 10px;
        }
    
        100% {
            width: 15px;
            height: 15px;
        }
    }
    
`;
const Esfera2 = styled.div`
	background-color: white;
    border-radius: 100%;
    animation: esfera2 1s linear infinite;
    @keyframes esfera2 {
        0% {
            width: 10px;
            height: 10px;
        }
    
        50% {
            width: 15px;
            height: 15px;
        }
    
        100% {
            width: 10px;
            height: 10px;
        }
    }
`;