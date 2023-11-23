import React from "react"
import { ReactElement } from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.button`
    background-color: #00420C;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    
    &:hover{
    background-color: #0E6E1E;
    }
`;

interface ButtonProps {
    children: ReactElement | string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset"; 
}

function Button({ children, onClick, type = "button" }: ButtonProps) {
    return (
        <ButtonContainer onClick={onClick} type={type}>

            {children}
        </ButtonContainer>
    );
}

export default Button;
