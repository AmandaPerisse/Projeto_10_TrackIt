import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Dias from './Dias';
import Esferas from "../Global/Esferas";

export default function Form(){
    const [nome, setNome] = React.useState('');
    const [desabilitado, setDesabilitado] = React.useState('');
    const [arrayDias, setArrayDias] = React.useState('[]');

    return (
        <FormCompleto>
            <input disabled = {desabilitado} type="text" onChange = {(e) => setNome(e.target.value)} value = {nome} placeholder='nome do hábito' />
            <Dias setArrayDias = {setArrayDias} />
            <button type = "submit">Entrar</button>
        </FormCompleto>
    );
}
const FormCompleto = styled.form`
    background-color: white;
    border-radius: 5px;
    padding: 15px;
`;