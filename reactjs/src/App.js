import Container from "./Componentes/Container"
import Footer from "./Componentes/Footer"
import Header from "./Componentes/Header"
import Menu from "./Componentes/Menu"
import styled from "styled-components"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

function App() {
  return (
    <Main>
      <Header/>
      <Menu/>
      <Container>
        <div>
          <h2> Olá, seja bem-vindo(a)! </h2>
        </div>
        </Container>
      <Footer/>

    </Main>
  )
}
export default App
