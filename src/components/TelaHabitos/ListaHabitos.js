import React from 'react';
import styled from 'styled-components';

export default function listaHabitos({ listaHabitos, aparecerMensagem }){

    return (
        <Habitos>
            <Texto>
                <h5>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </h5>
            </Texto>
            {listaHabitos}
        </Habitos>
    );
}
const Habitos = styled.div`
    
`;
const Texto = styled.div`
    margin-top: 20px;
    h5{
        display: ${props => props.aparecerMensagem};
    }
`;