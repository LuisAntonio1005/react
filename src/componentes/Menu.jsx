import { Link, Outlet } from "react-router-dom";
export default function Menu() {
    return (
        <div className="container">
        <nav>
          <ul>
            <li>
              <Link to={"/"} className="button-link">Inicio</Link>
              <Link to={"/al/alumnos"} className="button-link">Agregar alumnos</Link>
              <Link to={"/al/calAlumnos"} className="button-link">Calificaciones</Link>
              <Link to={"/al/carreras"} className="button-link">Carreras</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}