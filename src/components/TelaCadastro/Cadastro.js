import React from 'react';
import styled from 'styled-components';

import Logo from "./Logo";
import Form from "./Form";
import Logar from "./Logar";

export default function Cadastro(){

    return (
        <Alinhar>
            <Logo />
            <Form />
            <Logar />
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