import { useContext } from "react";
import ContainerPagina from "../../Componentes/ContainerPagina";
import { NameContext } from "../../Contextos/NameContext";

function Cursos() {
    const { nome } = useContext(NameContext);

    return (
        <ContainerPagina>
            <b>{nome},</b> esta é a página de cursos.
        </ContainerPagina>
    );
}

export default Cursos;
