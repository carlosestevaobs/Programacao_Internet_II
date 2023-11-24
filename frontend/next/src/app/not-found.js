"use client"
import Link from 'next/link'
import Home from './page'
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 20px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
`;

const ErrorMessage = styled.p`  
  font-size: 18px;
`;

const ErrorImage = styled.img`
  max-width: 300px;
  border-radius: 4px;
`;


export default function NotFound() {
  const imagem = "/imagens/astronauta.jpg";

  return (
      <Home>
        <ErrorContainer>
          <ErrorImage src={imagem} alt="Erro 404" />
          <ErrorMessage>
            <h2>Não encontrado</h2>
            <p>Não foi possível encontrar o recurso solicitado</p>
            <Link href="/">retornar para Home</Link>
          </ErrorMessage>
        </ErrorContainer>
      </Home>
  )
}
