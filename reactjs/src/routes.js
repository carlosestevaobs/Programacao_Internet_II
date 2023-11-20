import { BrowserRouter, Routes, Route } from "react-router-dom";
import Padrao from "./Paginas/Padrao";
import Inicio from "./Paginas/Inicio";
import Cursos from "./Paginas/Cursos";
import NaoEncontrada from "./Paginas/NaoEncontrada";
import FaleConosco from "./Paginas/FaleConosco";
import Temperatura from "./Paginas/Temperatura";
import Servidores from "./Paginas/Servidores";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Padrao />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="cursos" element={<Cursos />}></Route>
                    <Route path="temperatura" element={<Temperatura />}></Route> 
                    <Route path="servidores" element={<Servidores />}></Route> 
                    <Route path="fale-conosco" element={<FaleConosco />}></Route>                    
                    <Route path="*" element={<NaoEncontrada />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
