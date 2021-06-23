import { FaPencilAlt, FaTimes, FaStar } from "react-icons/fa";

export const Amigo = (props) => {
  const {
    amigo: { id, nombre, apellido, valoracion },
    amigo,
    borrarAmigo,
    toggleFormulario,
    setAmigoEditado,
  } = props;
  const editarAmigo = () => {
    toggleFormulario();
    setAmigoEditado(amigo);
  };
  return (
    <li className="col-4">
      <div className="amigo p-3">
        <ul className="list-unstyled">
          <li className="dato">Nombre: {nombre}</li>
          <li className="dato">Apellido: {apellido}</li>
          <li className="dato">
            Valoración: {valoracion >= 1 && <FaStar />}
            {valoracion >= 2 && <FaStar />}
            {valoracion >= 3 && <FaStar />}
          </li>
        </ul>
        <div className="acciones">
          <FaPencilAlt onClick={editarAmigo} />
          <FaTimes onClick={() => borrarAmigo(id)} />
        </div>
      </div>
    </li>
  );
};
