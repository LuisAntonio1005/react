import React, { useState } from 'react';

function Calificaciones() {
  const [calificaciones, setCalificaciones] = useState([
    { id: 1, estudiante: 'Howi', calificacion: 95 },
    { id: 2, estudiante: 'Imanol', calificacion: 85 },
    { id: 3, estudiante: 'Pablo', calificacion: 90 },
  ]);

  const [nuevaCalificacion, setNuevaCalificacion] = useState({
    id: '',
    estudiante: '',
    calificacion: '',
  });

  const [edicionActiva, setEdicionActiva] = useState(false);
  const [calificacionEditada, setCalificacionEditada] = useState({
    id: '',
    estudiante: '',
    calificacion: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (edicionActiva) {
      setCalificacionEditada((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setNuevaCalificacion((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const agregarCalificacion = () => {
    if (nuevaCalificacion.estudiante && nuevaCalificacion.calificacion) {
      setCalificaciones((prevState) => [
        ...prevState,
        {
          id: Date.now(),
          estudiante: nuevaCalificacion.estudiante,
          calificacion: parseInt(nuevaCalificacion.calificacion),
        },
      ]);
      setNuevaCalificacion({
        id: '',
        estudiante: '',
        calificacion: '',
      });
    }
  };

  const activarEdicion = (calificacion) => {
    setEdicionActiva(true);
    setCalificacionEditada(calificacion);
  };

  const guardarEdicion = () => {
    setCalificaciones((prevState) =>
      prevState.map((calificacion) =>
        calificacion.id === calificacionEditada.id ? calificacionEditada : calificacion
      )
    );
    setEdicionActiva(false);
    setCalificacionEditada({
      id: '',
      estudiante: '',
      calificacion: '',
    });
  };

  const cancelarEdicion = () => {
    setEdicionActiva(false);
    setCalificacionEditada({
      id: '',
      estudiante: '',
      calificacion: '',
    });
  };

  const eliminarCalificacion = (id) => {
    setCalificaciones((prevState) =>
      prevState.filter((calificacion) => calificacion.id !== id)
    );
  };

  return (
    <div className="container1">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Estudiante</th>
            <th>Calificación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {calificaciones.map((calificacion) => (
            <tr key={calificacion.id}>
              <td>{calificacion.id}</td>
              <td>
                {edicionActiva && calificacion.id === calificacionEditada.id ? (
                  <input
                    type="text"
                    name="estudiante"
                    value={calificacionEditada.estudiante}
                    onChange={handleInputChange}
                  />
                ) : (
                  calificacion.estudiante
                )}
              </td>
              <td>
                {edicionActiva && calificacion.id === calificacionEditada.id ? (
                  <input
                    type="number"
                    name="calificacion"
                    value={calificacionEditada.calificacion}
                    onChange={handleInputChange}
                  />
                ) : (
                  calificacion.calificacion
                )}
              </td>
              <td>
                {edicionActiva && calificacion.id === calificacionEditada.id ? (
                  <>
                    <button onClick={guardarEdicion}>Guardar</button>
                    <button onClick={cancelarEdicion}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => activarEdicion(calificacion)}>Editar</button>
                    <button onClick={() => eliminarCalificacion(calificacion.id)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <label>Estudiante:</label>
      <input
        type="text"
        name="estudiante"
        value={nuevaCalificacion.estudiante}
        onChange={handleInputChange}
      />
      <label>Calificación:</label>
      <input
        type="number"
        name="calificacion"
        value={nuevaCalificacion.calificacion}
        onChange={handleInputChange}
      />
      <button onClick={agregarCalificacion}>Agregar</button>
    </div>
  );
}

export default Calificaciones;
