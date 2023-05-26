import React, { useState } from "react";
import './stylo.css';

const Form = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [career, setCareer] = useState("");
    const [photo, setPhoto] = useState(null);
    const [data, setData] = useState([]);

   
    const aniadir = (event) => {
        event.preventDefault();
    
        // Verificar si se llenaron todos los campos requeridos
        if (!id || !name || !career || !photo) {
            alert("Todos los campos son obligatorios");
            return;
        }
    
        // Verificar si el ID ya existe en el arreglo "data"
        const index = data.findIndex((row) => row.id === id);
        if (index !== -1) {
            alert("La matricula ya existe :(");
            return;
        }
    
        // Agregar el nuevo objeto al arreglo "data"
        setData([...data, { id, name, career, photo }]);
        setId("");
        setName("");
        setCareer("");
        setPhoto(null);
    };
    
    

    const editar = (row) => {
        setId(row.id);
        setName(row.name);
        setCareer(row.career);
        setPhoto(row.photo);
    };

    
    const borrar = (id) => {
        setData(data.filter((row) => row.id !== id));
    };

    const guardar = (event) => {
        event.preventDefault();
        const newData = data.map((row) => {
         if (row.id === id) {
            return { id, name, career, photo };
         }
          return row;
        });
        setData(newData);
        setId("");
        setName("");
        setCareer("");
        setPhoto(null);
      };
    const foto = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
    };

    return (
        <>
            <h1 className="tituloF">Control Escolar</h1>
            <form onSubmit={aniadir} className="form">
                <label htmlFor="id" >Matrícula:</label>
                <input
                    type="text"
                    id="id"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />

                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="career">Carrera:</label>
                <select
                    id="career"
                    value={career}
                    onChange={(event) => setCareer(event.target.value)}
                >
                    <option value="n">...</option>
                    <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                    <option value="Ingeniería en Sistemas Computacionales">Ingeniería en Sistemas Computacionales</option>
                    <option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
                    <option value="Ingeniería Civil">Ingeniería Civil</option>
                    <option value="Licenciatura en Administración">Licenciatura en Administración</option>
                    <option value="Ingeniería Química">Ingeniería Química</option>
                    <option value="Ingeniería en Logística">Ingeniería en Logística</option>
                    <option value="Ingeniería en Tecnologías de la Información y Comunicaciones">
                        Ingeniería en Tecnologías de la Información y Comunicaciones</option>
                </select>

                <label htmlFor="photo">Foto:</label>
                <input type="file" id="photo" onChange={foto} />

                <button type="submit">Agregar alumno</button>
                <button type="button" onClick={guardar}>Guardar cambios</button>
            </form>

            <h1 className="tt">Informacion de alumnos</h1>
            <h2 className="tt"> :)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Carrera</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>
                                {row.photo && (
                                    <img src={URL.createObjectURL(row.photo)} alt="Foto" />
                                )}
                            </td>
                            <td>{row.name}</td>
                            <td>{row.career}</td>
                            
                            <td>
                                <button type="button" onClick={() => editar(row)}>Editar alumno</button>
                                <button type="button" onClick={() => borrar(row.id)}>
                                    Eliminar alumno
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Form;
