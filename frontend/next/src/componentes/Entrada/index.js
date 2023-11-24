
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    margin: 0px 20px 20px 2px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    color: #333;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export default function Entrada({ nomeLabel, tipo = "text", nome, obrigatorio = false }) {
    return (
        <InputContainer>
            <Label htmlFor={nome}>
                {nomeLabel}
            </Label>
            <Input
                type={tipo}
                name={nome}
                required={obrigatorio}
            />
        </InputContainer>
    );
}
