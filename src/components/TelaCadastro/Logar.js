import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Logar(){

    return (

        <Link to = "/">
            <Texto>
                Já tem uma conta? Faça login!
            </Texto>
        </Link>
    );
}
const Texto = styled.h6`
    margin-top: 20px;
    color: #52B6FF;
    text-decoration-line: underline;
`;