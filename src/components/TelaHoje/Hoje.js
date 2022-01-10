import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Logo from "../Global/Logo";
import Rodape from "../Global/Rodape";
import Data from "./Data";

export default function Habitos({ token, id, name, image }){
        
    const [listaHabitos, setListaHabitos] = React.useState([]);
    const [percentage, setPercentage] = React.useState(0);
    const listaRef = useRef();
    function recarregarPagina(){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then(response => {
            setListaHabitos(response.data)
            let qtd = 0;
            for(let i = 0; i< response.data.length; i++){
                if (response.data[i].done){
                    qtd += 1;
                }
            }
            setPercentage((qtd*100)/response.data.length);
        });
    }
    useEffect(() => {
        recarregarPagina();
    }, []);
    function Componentes(){
        if (listaHabitos.length > 0){
            return (
                listaHabitos.map(habito => {
                    let classe = "";
                    if(habito.done == false){
                        classe = "false";
                    }else{
                        classe = "true";
                    }
                    return(
                        <Fundo key = {habito.id}>
                            <Texto>
                                <h4>
                                    {habito.name}
                                </h4>
                                <h6>
                                    Sequência atual: {habito.currentSequence} dias<br />
                                    Seu recorde: {habito.highestSequence} dias
                                </h6>
                            </Texto>
                            <FundoCheck className = {classe} onClick={() => selecionarHabito(habito.id, habito.done)}>
                                <img src = "img/check.png" alt = "check" />
                            </FundoCheck>
                        </Fundo>
                    )
                })
            )
        }
        return null;
    }

    function selecionarHabito(id, done){
        let promise = "";
        if(done){
            promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        else{
            promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        promise.then(response => {
            recarregarPagina();
        });
    }

    return (
        <Corpo>
            <Cabecalho>
                <Logo />
                <Usuario>
                    <img src = {image} alt = "Usuario" />
                </Usuario>
            </Cabecalho>
            <Conteudo>
                <Data />
                <h5>
                    Nenhum hábito concluído ainda
                </h5>
                <Componentes ref = {listaRef} />
            </Conteudo>
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
const Conteudo = styled.div`
    margin-top: 70px;
    margin-bottom: 80px;
    padding: 50px 20px;
    h3{
        color: #126BA5;
    }
    h5{
        color: #BABABA;
    }
`;
const Fundo = styled.div`
    background-color: white;
    padding: 15px;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
`;
const FundoCheck = styled.button`
    background-color: #EBEBEB;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
`;
const Texto = styled.div`
    width: 225px;
`;

