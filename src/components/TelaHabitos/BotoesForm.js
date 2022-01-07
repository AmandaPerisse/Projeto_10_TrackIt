import React from 'react';
import styled from 'styled-components';

import Esferas from "../Global/Esferas";

export default function BotoesForm({ aparecer, desabilitado, setAparecerCriacaoHabitos }){

    return (
        <Botoes>
            <Botao1 disabled = {desabilitado} type = "button" onClick = {() => setAparecerCriacaoHabitos('none')}>
                <h5>Cancelar</h5>
            </Botao1>
            <Botao2 aparecer = {aparecer} disabled = {desabilitado} type="submit">
                <h5>
                    Salvar
                </h5>
                <Esferas escondido = {desabilitado}/>
            </Botao2>
        </Botoes>
    );
}
const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 30px;
`;
const Botao1 = styled.button`
    h5{
        color: #52B6FF;
    }
`;
const Botao2 = styled.button`
    background-color: #52B6FF;
    border-radius: 4.63636px;
    width: 84px;
    height: 35px;
    margin-left: 15px;
    h5{
        display: ${props => props.aparecer};
        color: white;
    }
`;

