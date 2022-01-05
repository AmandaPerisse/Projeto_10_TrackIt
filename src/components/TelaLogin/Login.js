import React from 'react';
import styled from 'styled-components';

import Logo from "./Logo";
import Form from "./Form";
import Cadastrar from "./Cadastrar";

export default function Login({ setToken }){

    return (
        <Alinhar>
            <Logo />
            <Form setToken = {setToken} />
            <Cadastrar />
        </Alinhar>
    );
}
const Alinhar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
    
`;