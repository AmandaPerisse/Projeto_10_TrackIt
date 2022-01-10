import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Form from './Form';

export default function Conteudo({ token }){

    const [listaHabitos, setListaHabitos] = React.useState([]);
    const [aparecerMensagem, setAparecerMensagem] = React.useState('none');
    const [aparecerCriacaoHabitos, setAparecerCriacaoHabitos] = React.useState('none');

    const listaRef = useRef();
    function recarregarPagina(){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then(response => {
            if (response.data.length < 1){
                setAparecerMensagem('block');
            }
            else{
                setAparecerMensagem('none');
            }
            setListaHabitos(response.data);
            for(let i = 0; i<listaRef.current.children.length;i++){
                for(let j = 0; j< response.data[i].days.length; j++){
                    listaRef.current.children[i].children[1].children[(response.data[i].days[j])].classList.add('selecionado');
                }
            }
        });
    }
    function excluirHabito(id){
        while(true){
            const confirmar = prompt("Deseja realmente excluir esse hábito? (s/n)");
            if(confirmar === "s"){
                const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                promise.then(response => recarregarPagina());
                break;
            }
            else if(confirmar === "n"){
                break;
            }
            else{
                alert("Digite 's' ou 'n'!");
            }
        }
    }
    function Componentes(){
        if (listaHabitos.length > 0){
            return (
                listaHabitos.map(habito => {
                    return(
                        <Fundo key={habito.id}>
                            <Habito>
                                <h4>
                                    {habito.name}
                                </h4>
                                <button onClick={()=>excluirHabito(habito.id)}>
                                    <img src = "img/excluir.png" alt = "excluir" />
                                </button>
                            </Habito>
                            <Botoes>
                                <Botao2>
                                    <h4>D</h4>
                                </Botao2>
                                <Botao2>
                                    <h4>S</h4>
                                </Botao2>
                                <Botao2>
                                    <h4>T</h4>
                                </Botao2>
                                <Botao2>
                                    <h4>Q</h4>
                                </Botao2>
                                <Botao2>
                                    <h4>Q</h4>
                                </Botao2>
                                <Botao2>
                                    <h4>S</h4>
                                </Botao2>
                                <Botao2>
                                    <h4>S</h4>
                                </Botao2>
                            </Botoes>
                        </Fundo>
                    )
                })
            )
        }
        return null;
    }
    useEffect(() => {
        recarregarPagina();
    }, []);
    return (
        <ConteudoCompleto>
            <Titulo>
                <h3>Meus Hábitos</h3>
                <Botao onClick = {() => setAparecerCriacaoHabitos('block')}>
                    <h3>+</h3>
                </Botao>
            </Titulo>
            <CriarHabito aparecerCriacaoHabitos = {aparecerCriacaoHabitos}>
                <Form recarregarPagina = {recarregarPagina} token = {token} setAparecerCriacaoHabitos = {setAparecerCriacaoHabitos} />
            </CriarHabito>
            <Texto aparecerMensagem = {aparecerMensagem} >
                <h5>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </h5>
            </Texto>
            <div ref = {listaRef}>
                <Componentes />
            </div>
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
const Botao = styled.button`
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
const CriarHabito = styled.div`
    display: ${props => props.aparecerCriacaoHabitos};
    margin-top: 20px;
`;
const Habito = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    img{
        width: 13px;
        height: 15px;
    }
`;
const Botoes = styled.div``;
const Botao2 = styled.button`
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
const Texto = styled.div`
    margin-top: 10px;
    display: ${props => props.aparecerMensagem};
`;
const Fundo = styled.div`
    background-color: white;
    padding: 15px;
    margin-top: 20px;
    border-radius: 5px;
`;
