import Container from "../../Componentes/Container";
import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import Menu from "../../Componentes/Menu";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

function Padrao() {
    return (
        <ContentWrapper>
            <Header />
            <Menu />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </ContentWrapper>
    );
}
export default Padrao;
