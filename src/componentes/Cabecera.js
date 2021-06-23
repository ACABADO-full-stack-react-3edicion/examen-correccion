export const Cabecera = (props) => {
  const { nAmigos } = props;
  return (
    <header className="cabecera row">
      <h1 className="col">Gestión de mis {nAmigos} amigos</h1>
    </header>
  );
};
