import { Link, Outlet } from "react-router-dom";
import Menu from "../componentes/Menu";
import Inicio from "../componentes/Inicio";
export default function Home() {
    return (
        <div>
            <h1 className="tituloF">TESJI</h1>
   
            
            
            <div>
                <div>
                <Menu/>
                    
                </div>
            <Outlet/>
            </div>
            
        </div>

    );

}