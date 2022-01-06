import React from 'react';
import styled from 'styled-components';

export default function Dias({ setArrayDias }){

    let dias = [];
    console.log(dias);
    function adicionarDia(n){
        if (dias.includes(n)){
            let indice = dias.indexOf(n);
            dias.splice(indice, 1);
        }
        else{
            dias.push(n);
        }
        
    }

    return (
        <DiasCompleto>
            <Botao onClick = {() => adicionarDia("1")}>
                <h4>D</h4>
            </Botao>
            <Botao onClick = {() => adicionarDia("2")}>
                <h4>S</h4>
            </Botao>
            <Botao onClick = {() => adicionarDia("3")}>
                <h4>T</h4>
            </Botao>
            <Botao onClick = {() => adicionarDia("4")}>
                <h4>Q</h4>
            </Botao>
            <Botao onClick = {() => adicionarDia("5")}>
                <h4>Q</h4>
            </Botao>
            <Botao onClick = {() => adicionarDia("6")}>
                <h4>S</h4>
            </Botao>
            <Botao onClick = {() => adicionarDia("7")}>
                <h4>S</h4>
            </Botao>
        </DiasCompleto>
    );
}
const DiasCompleto = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
const Botao = styled.button`
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
