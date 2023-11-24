"use client"
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  gap: 20px; 
`;

const TextContainer = styled.div`
  font-size: 18px;
  color: #333;
`;

export default function Inicio() {
  return (
    <Container>
      <Image
        src="/imagens/ifpi.png"
        alt="IFPI"
        width={200} 
        height={180}
      />
      <TextContainer>
        <p>Olá, seja bem-vindo ao nosso conteúdo de Next.js.</p>
        <p>Espero que você goste do conteúdo!</p>
      </TextContainer>
    </Container>
  );
}
