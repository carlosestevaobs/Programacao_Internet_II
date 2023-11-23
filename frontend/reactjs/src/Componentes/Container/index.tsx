import React, { ReactNode } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";

const MainContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  flex: 1;
`;

const SidebarContainer = styled.div`
  width: 164px;
`;

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <MainContainer>
      <SidebarContainer>
        <Sidebar />       
      </SidebarContainer>
      {children}
    </MainContainer>
  );
}


export default Container;
