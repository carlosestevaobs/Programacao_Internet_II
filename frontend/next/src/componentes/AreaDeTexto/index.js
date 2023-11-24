import React from 'react';
import styled from 'styled-components';

const TextAreaContainer = styled.div`
    margin: 0px 20px 20px 2px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    color: #333;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
`;

export default function AreaDeTexto({ nomeLabel, nome, linhas, colunas, obrigatorio }) {
    return (
        <TextAreaContainer>
            <Label htmlFor={nome}>
                {nomeLabel}
            </Label>
            <TextArea
                name={nome}
                rows={linhas}
                cols={colunas}
                required={obrigatorio}
            />
        </TextAreaContainer>
    );
}
