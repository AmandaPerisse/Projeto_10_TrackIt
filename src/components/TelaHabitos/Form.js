import React, { useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import BotoesForm from './BotoesForm';

export default function Form({ recarregarPagina, token, setAparecerCriacaoHabitos }){
    const [nome, setNome] = React.useState('');
    const [desabilitado, setDesabilitado] = React.useState('');
    const [aparecer, setAparecer] = React.useState('block');
    const [arrayDias, setArrayDias] = React.useState([]);
    const [desabilitar, setDesabilitar] = React.useState('');

    const listaRef = useRef();

    function adicionarDia(n){
        let arr = arrayDias;
        n = parseInt(n);
        if(arr.includes(n+1)){
            let indice = arr.indexOf(n+1);
            arr.splice(indice, 1);
            setArrayDias(arr);
            listaRef.current.children[n].classList.remove("selecionado");
        }
        else{
            const novo = [...arr, n+1];
            novo.sort();
            setArrayDias(novo);
            listaRef.current.children[n].classList.add("selecionado");
        }
    }

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
            setNome('');
            setAparecerCriacaoHabitos('none');
            recarregarPagina();
            setArrayDias([]);
            for(let i =0; i<listaRef.current.children.length;i++){
                listaRef.current.children[i].classList.remove("selecionado");
            }
        });
        promise.catch(error => {
            alert('Falha na criação do hábito!');
            setDesabilitado('');
            setAparecer('block');
            setDesabilitar('auto');
            setNome('');
            setArrayDias([]);
            for(let i =0; i<listaRef.current.children.length;i++){
                listaRef.current.children[i].classList.remove("selecionado");
            }
        });
    }

    return (
        <FormCompleto onSubmit = {criandoHabito}>
            <input disabled = {desabilitado} type="text" onChange = {(e) => setNome(e.target.value)} value = {nome} placeholder='nome do hábito' />
            <DiasCompleto ref = {listaRef} desabilitar = {desabilitar} >
                <Botao type = "button" onClick = {() => adicionarDia("0")}>
                    <h4>D</h4>
                </Botao>
                <Botao type = "button" onClick = {() => adicionarDia("1")}>
                    <h4>S</h4>
                </Botao>
                <Botao type = "button" onClick = {() => adicionarDia("2")}>
                    <h4>T</h4>
                </Botao>
                <Botao type = "button" onClick = {() => adicionarDia("3")}>
                    <h4>Q</h4>
                </Botao>
                <Botao type = "button" onClick = {() => adicionarDia("4")}>
                    <h4>Q</h4>
                </Botao>
                <Botao type = "button" onClick = {() => adicionarDia("5")}>
                    <h4>S</h4>
                </Botao>
                <Botao type = "button" onClick = {() => adicionarDia("6")}>
                    <h4>S</h4>
                </Botao>
            </DiasCompleto>
            <BotoesForm aparecer = {aparecer} desabilitado = {desabilitado} setAparecerCriacaoHabitos = {setAparecerCriacaoHabitos} />
        </FormCompleto>
    );
}
const FormCompleto = styled.form`
    background-color: white;
    border-radius: 5px;
    padding: 15px;
`;
const DiasCompleto = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    pointer-events: ${props => props.desabilitar};
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