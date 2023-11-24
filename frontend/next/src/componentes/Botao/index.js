import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color:  #00420C;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover{
    background-color: #0E6E1E;
    }
`;

export default function Botao({ tipo }) {
    return (
        <StyledButton type={tipo}>
            Enviar
        </StyledButton>
    );
}

