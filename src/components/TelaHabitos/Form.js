import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import axios from 'axios';

import Dias from './Dias';
import BotoesForm from './BotoesForm';

export default function Form({ token, setAparecerCriacaoHabitos }){
    const [nome, setNome] = React.useState('');
    const [desabilitado, setDesabilitado] = React.useState('');
    const [aparecer, setAparecer] = React.useState('block');
    const [arrayDias, setArrayDias] = React.useState([]);
    const [desabilitar, setDesabilitar] = React.useState('');

    const [domingo, setDomingo] = React.useState('');
    const [segunda, setSegunda] = React.useState('');
    const [terca, setTerca] = React.useState('');
    const [quarta, setQuarta] = React.useState('');
    const [quinta, setQuinta] = React.useState('');
    const [sexta, setSexta] = React.useState('');
    const [sabado, setSabado] = React.useState('');

    function criandoHabito(e){
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            name: nome,
            days: arrayDias
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setDesabilitado('disabled');
        setAparecer('none');
        setDesabilitar('none');
        promise.then(response => {
            setDesabilitado('');
            setAparecer('block');
            setDesabilitar('auto');
        });
        promise.catch(error => {
            alert('Falha na criação do hábito!');
            setDesabilitado('');
            setAparecer('block');
            setDesabilitar('auto');
            setNome('');
            setDomingo('white');
            setSegunda('white');
            setTerca('white');
            setQuarta('white');
            setQuinta('white');
            setSexta('white');
            setSabado('white');
        });
    }

    return (
        <FormCompleto onSubmit = {criandoHabito}>
            <input disabled = {desabilitado} type="text" onChange = {(e) => setNome(e.target.value)} value = {nome} placeholder='nome do hábito' />
            <Dias domingo = {domingo} setDomingo = {setDomingo} segunda = {segunda} setSegunda = {setSegunda} terca = {terca} setTerca = {setTerca} quarta = {quarta} setQuarta = {setQuarta} quinta = {quinta} setQuinta = {setQuinta} sexta = {sexta} setSexta = {setSexta} sabado = {sabado} setSabado = {setSabado} desabilitar = {desabilitar} arrayDias = {arrayDias} setArrayDias = {setArrayDias} />
            <BotoesForm aparecer = {aparecer} desabilitado = {desabilitado} setAparecerCriacaoHabitos = {setAparecerCriacaoHabitos} />
        </FormCompleto>
    );
}
const FormCompleto = styled.form`
    background-color: white;
    border-radius: 5px;
    padding: 15px;
`;
