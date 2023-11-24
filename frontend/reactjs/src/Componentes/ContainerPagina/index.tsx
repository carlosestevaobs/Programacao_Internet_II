import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface ContainerPaginaProps {
  children: ReactNode;
}

function ContainerPagina({ children }: ContainerPaginaProps) {
  return <Container>{children}</Container>;
}

export default ContainerPagina;
