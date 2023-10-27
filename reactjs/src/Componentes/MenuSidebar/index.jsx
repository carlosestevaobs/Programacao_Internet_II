import styled from "styled-components";

const Titulo = styled.div`    
    border-top: 4px solid #00420c;
    background-color: #EEEFF1;
    padding-left: 10px;
    color: #00420c;
    display: flex;
    align-items: center;
    height: 50px;
`
const Itens = styled.ul`
	  list-style: none;
	  padding: 0;
	  margin: 0;
	`;

const Item = styled.li`
	  padding: 10px;
	  background-color: #fff;
	  transition: background-color 0.3s ease;
	  cursor: pointer;
	
	  &:hover {
	    background-color: #ccc;
	  }
	`;

function MenuSidebar({ texto, links }) {
    return (
        <>
            <Titulo>
                <h4>{texto}</h4>
            </Titulo>
            <Itens>
                {links.map((link, index) => (
                    <Item key={index}>
                        {link.nome}
                    </Item>
                ))}
            </Itens>
        </>
    );
}
export default MenuSidebar;
