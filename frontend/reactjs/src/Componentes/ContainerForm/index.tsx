import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #ccc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 66, 12, 0.4);
`;

interface ContainerFormProps {
    children: ReactNode;
}

function ContainerForm({ children }: ContainerFormProps) {
    return <Container>{children}</Container>;
}

export default ContainerForm;
