import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Cadastrar(){

    return (

        <Link to = "/cadastro">
            <Texto>
                Não tem uma conta? Cadastre-se!
            </Texto>
        </Link>
    );
}
const Texto = styled.h6`
    margin-top: 20px;
    color: #52B6FF;
    text-decoration-line: underline;
`;