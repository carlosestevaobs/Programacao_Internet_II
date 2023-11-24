import React from 'react';
import styled from 'styled-components';
import Entrada from '../Entrada';
import AreaDeTexto from '../AreaDeTexto';
import Botao from '../Botao';

const FormContainer = styled.div`
    background-color: #f2f2f2;
   margin-top: 10px;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h2`
    color: #00420C;
    margin-bottom: 20px;
`;

export default function FormContato() {
    return (
        <FormContainer>
            <Titulo>Entre em Contato</Titulo>
            <Entrada
                nomeLabel="Nome completo:"
                nome="nome"
                obrigatorio={true}
            />
            <Entrada
                nomeLabel="Email:"
                tipo="email"
                nome="email"
                obrigatorio={true}
            />
            <Entrada
                nomeLabel="Telefone:"
                tipo="tel"
                nome="telefone"
            />
            <AreaDeTexto
                nomeLabel="Mensagem:"
                nome="mensagem"
                linhas="4"
                colunas="50"
                obrigatorio={true}
            />
            <Botao
                tipo="submit"
            />
        </FormContainer>
    );
}

