import React from 'react';
import styled from 'styled-components';

export default function Dias({ domingo, setDomingo, segunda, setSegunda, terca, setTerca, quarta, setQuarta, quinta, setQuinta, sexta, setSexta, sabado, setSabado, desabilitar, arrayDias, setArrayDias }){

    const cor1 = "#D5D5D5";
    const cor2 = "white";

    function adicionarDia(n){
        let arr = arrayDias.sort();
        if (arr.includes(n)){
            let indice = arr.indexOf(n);
            arr.splice(indice, 1);
            setArrayDias(arr);
            switch(n){
                case "1" :
                    setDomingo(cor2);
                    break;
                case "2" :
                    setSegunda(cor2);
                    break;
                case "3" :
                    setTerca(cor2);
                    break;
                case "4" :
                    setQuarta(cor2);
                    break;
                case "5" :
                    setQuinta(cor2);
                    break;
                case "6" :
                    setSexta(cor2);
                    break;
                case "7" :
                    setSabado(cor2);
                    break;
            }
        }
        else{
            const novo = [...arr, n];
            setArrayDias(novo);
            switch(n){
                case "1" :
                    setDomingo(cor1);
                    console.log(domingo)
                    break;
                case "2" :
                    setSegunda(cor1);
                    break;
                case "3" :
                    setTerca(cor1);
                    break;
                case "4" :
                    setQuarta(cor1);
                    break;
                case "5" :
                    setQuinta(cor1);
                    break;
                case "6" :
                    setSexta(cor1);
                    break;
                case "7" :
                    setSabado(cor1);
                    break;
            }
        }
    }
    function corLetra(cor){
        if(cor == cor1){
            return cor2;
        }
        else{
            return cor1;
        }
    }
    
    return (
        <DiasCompleto desabilitar = {desabilitar} >
            <Botao1 domingo = {domingo} corLetra = {corLetra(domingo)} type = "button" onClick = {() => adicionarDia("1")}>
                <h4>D</h4>
            </Botao1>
            <Botao2 segunda = {segunda} corLetra = {corLetra(segunda)} type = "button" onClick = {() => adicionarDia("2")}>
                <h4>S</h4>
            </Botao2>
            <Botao3 terca = {terca} corLetra = {corLetra(terca)} type = "button" onClick = {() => adicionarDia("3")}>
                <h4>T</h4>
            </Botao3>
            <Botao4 quarta = {quarta} corLetra = {corLetra(quarta)} type = "button" onClick = {() => adicionarDia("4")}>
                <h4>Q</h4>
            </Botao4>
            <Botao5 quinta = {quinta} corLetra = {corLetra(quinta)} type = "button" onClick = {() => adicionarDia("5")}>
                <h4>Q</h4>
            </Botao5>
            <Botao6 sexta = {sexta} corLetra = {corLetra(sexta)} type = "button" onClick = {() => adicionarDia("6")}>
                <h4>S</h4>
            </Botao6>
            <Botao7 sabado = {sabado} corLetra = {corLetra(sabado)} type = "button" onClick = {() => adicionarDia("7")}>
                <h4>S</h4>
            </Botao7>
        </DiasCompleto>
    );
}
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
const Botao1 = styled(Botao)`
    background-color: ${props => props.domingo};
    h4{
        color: ${props => props.corLetra};
    }
`;
const Botao2 = styled(Botao)`
    background-color: ${props => props.segunda};
    h4{
        color: ${props => props.corLetra};
    }
`;
const Botao3 = styled(Botao)`
    background-color: ${props => props.terca};
    h4{
        color: ${props => props.corLetra};
    }
`;
const Botao4 = styled(Botao)`
    background-color: ${props => props.quarta};
    h4{
        color: ${props => props.corLetra};
    }
`;
const Botao5 = styled(Botao)`
    background-color: ${props => props.quinta};
    h4{
        color: ${props => props.corLetra};
    }
`;
const Botao6 = styled(Botao)`
    background-color: ${props => props.sexta};
    h4{
        color: ${props => props.corLetra};
    }
`;
const Botao7 = styled(Botao)`
    background-color: ${props => props.sabado};
    h4{
        color: ${props => props.corLetra};
    }
`;
