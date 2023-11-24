"use client"
import Link from 'next/link';
import styled from 'styled-components';
import Inicio from './inicio/page';

const backgroundColorStart = '#333';
const backgroundColorEnd = '#555';
const textColor = '#fff';
const hoverColor = '#2B9F3F';
const paddingSize = '20px';
const borderRadius = '10px';

const MenuContainer = styled.nav`
 background: linear-gradient(to bottom, ${backgroundColorStart}, ${backgroundColorEnd});
  padding: ${paddingSize};
  border-radius: ${borderRadius};
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${textColor};
`;

const MenuItem = styled.li`
  list-style: none;
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: ${hoverColor};
  }
`;

const DivImg = styled.div`
  height: 100px;
  width: 100px; 
  background-color: ${textColor};
  border-radius: ${borderRadius};
  box-shadow: 2px 2px 1px 1px ${hoverColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
  max-height: 100%;
  max-width: 100%; 
`;

export default function Home({ children = <Inicio /> }) {
  return (
    <main>
      <MenuContainer>
        <DivImg>
          <IMG src="/imagens/ifpi.png" alt="IFPI Logo" />
        </DivImg>
        <div>
          <ul>
            <MenuItem>
              <StyledLink href="/">Home</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="/contato">Contato</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="/fotos">Fotos</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="/nomes">Nomes</StyledLink>
            </MenuItem>

          </ul>
        </div>
      </MenuContainer>
      {children}
    </main>
  );
}
