export const Acciones = (props) => {
  const { toggleFormulario } = props;
  return (
    <div className="row">
      <div className="col">
        <button
          type="button"
          className="btn btn-primary"
          onClick={toggleFormulario}
        >
          Crear amigo
        </button>
      </div>
    </div>
  );
};
