import React, { useState } from 'react';

function Carreras() {
  const [carreras, setCarreras] = useState([
    { id: 1, nombre: 'Ingeniería quimica' },
    { id: 2, nombre: 'Licenciatura en Administración de Empresas' },
    { id: 3, nombre: 'Ingenieria en Sistemas Computacionales' },
  ]);

  const [nuevaCarrera, setNuevaCarrera] = useState('');
  const [carreraEditada, setCarreraEditada] = useState('');
  const [edicionActiva, setEdicionActiva] = useState(false);
  const [carreraEditadaId, setCarreraEditadaId] = useState(null);

  const handleInputChange = (event) => {
    setNuevaCarrera(event.target.value);
  };

  const agregarCarrera = () => {
    if (nuevaCarrera.trim() !== '') {
      const nuevaCarreraObj = { id: Date.now(), nombre: nuevaCarrera };
      setCarreras([...carreras, nuevaCarreraObj]);
      setNuevaCarrera('');
    }
  };

  const activarEdicion = (id, nombre) => {
    setCarreraEditada(nombre);
    setCarreraEditadaId(id);
    setEdicionActiva(true);
  };

  const guardarEdicion = () => {
    if (carreraEditada.trim() !== '') {
      setCarreras((prevCarreras) =>
        prevCarreras.map((carrera) =>
          carrera.id === carreraEditadaId ? { ...carrera, nombre: carreraEditada } : carrera
        )
      );
      setEdicionActiva(false);
      setCarreraEditada('');
      setCarreraEditadaId(null);
    }
  };

  const cancelarEdicion = () => {
    setEdicionActiva(false);
    setCarreraEditada('');
    setCarreraEditadaId(null);
  };

  const eliminarCarrera = (id) => {
    setCarreras((prevCarreras) => prevCarreras.filter((carrera) => carrera.id !== id));
  };

  return (
    <div className='container1'>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carreras.map((carrera) => (
            <tr key={carrera.id}>
              <td>{carrera.id}</td>
              <td>
                {edicionActiva && carrera.id === carreraEditadaId ? (
                  <input
                    type="text"
                    value={carreraEditada}
                    onChange={(e) => setCarreraEditada(e.target.value)}
                  />
                ) : (
                  carrera.nombre
                )}
              </td>
              <td>
                {edicionActiva && carrera.id === carreraEditadaId ? (
                  <>
                    <button onClick={guardarEdicion}>Guardar</button>
                    <button onClick={cancelarEdicion}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => activarEdicion(carrera.id, carrera.nombre)}>Editar</button>
                    <button onClick={() => eliminarCarrera(carrera.id)}>Eliminar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input type="text" value={nuevaCarrera} onChange={handleInputChange} />
        <button onClick={agregarCarrera}>Agregar</button>
      </div>
    </div>
  );
}

export default Carreras;
