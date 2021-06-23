import { useState } from "react";

export const Formulario = (props) => {
  const { amigoEditado, toggleFormulario, crearAmigo, modificarAmigo } = props;
  const datosIniciales = amigoEditado
    ? {
        id: amigoEditado.id,
        nombre: amigoEditado.nombre,
        apellido: amigoEditado.apellido,
        valoracion: amigoEditado.valoracion,
      }
    : {
        id: null,
        nombre: "",
        apellido: "",
        valoracion: "0",
      };
  const [amigo, setAmigo] = useState(datosIniciales);
  const enviarFormulario = (e) => {
    e.preventDefault();
    toggleFormulario();
    if (amigoEditado) {
      modificarAmigo(amigo);
    } else {
      crearAmigo(amigo);
    }
  };
  const setDato = (e) => {
    setAmigo({
      ...amigo,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <form className="formulario row" onSubmit={enviarFormulario}>
      <div className="form-group col-3">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={amigo.nombre}
          onChange={setDato}
          className="form-control"
        />
      </div>
      <div className="form-group col-3">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={amigo.apellido}
          onChange={setDato}
          className="form-control"
        />
      </div>
      <div className="form-group col-2">
        <label htmlFor="valoracion">Valoración:</label>
        <select
          id="valoracion"
          className="form-control"
          value={amigo.valoracion}
          onChange={setDato}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="form-group col-4">
        <button type="submit" className="btn btn-block btn-primary">
          {amigoEditado ? "Modificar" : "Crear"}
        </button>
        <button
          type="button"
          className="btn btn-block btn-primary"
          onClick={toggleFormulario}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
