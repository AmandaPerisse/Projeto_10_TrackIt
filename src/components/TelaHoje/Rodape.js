import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Rodape(){


    const percentage = 0;
    return (
        <RodapeCompleto>
            <Link to = "/habitos"><h4>Hábitos</h4></Link>
            <Botao>
                <Link to = "/hoje">
                    <CircularProgressbar value = {percentage}
                        text = "Hoje"
                        styles = {{
                            root: {
                                width: '90%'
                            },
                            path: {
                                stroke: '#fff'
                            },
                            trail: {
                                stroke: 'transparent'
                            },
                            text: {
                                fontSize: '26px',
                                fontFamily: '"Roboto", sans-serif',
                                fill: 'white'
                            }
                        }}
                    />
                </Link>
            </Botao>
            <Link to = "/historico"><h4>Histórico</h4></Link>
        </RodapeCompleto>
    );
}
const RodapeCompleto = styled.div`
    background-color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 70px;
    h4{
        color: #52B6FF;
    }
`;
const Botao = styled.div`

    position: absolute;
    background-color: #52B6FF;
    height: 90px;
    width: 90px;
    border-radius: 100%;
    margin-left: -45px;
    bottom: 15px;
    left: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
`;
