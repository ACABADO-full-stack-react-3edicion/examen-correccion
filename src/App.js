import { useEffect, useState } from "react";
import { Acciones } from "./componentes/Acciones";
import { Amigo } from "./componentes/Amigo";
import { Cabecera } from "./componentes/Cabecera";
import { Formulario } from "./componentes/Formulario";

function App() {
  const urlApi = "http://localhost:3001/amigos/";
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const [amigos, setAmigos] = useState([]);
  const [amigoEditado, setAmigoEditado] = useState(null);
  const toggleFormulario = () => {
    if (formularioAbierto) {
      setAmigoEditado(null);
    }
    setFormularioAbierto(!formularioAbierto);
  };
  const cargarAmigos = async () => {
    const resp = await fetch(urlApi);
    const amigosAPI = await resp.json();
    setAmigos(amigosAPI);
  };
  const borrarAmigo = async (id) => {
    const resp = await fetch(urlApi + id, {
      method: "DELETE",
    });
    if (resp.ok) {
      setAmigos(amigos.filter((amigo) => amigo.id !== id));
    }
  };
  const crearAmigo = async (amigo) => {
    const resp = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...amigo, valoracion: +amigo.valoracion }),
    });
    const nuevoAmigo = await resp.json();
    setAmigos([...amigos, nuevoAmigo]);
  };
  const modificarAmigo = async (amigoModificado) => {
    const resp = await fetch(urlApi + amigoModificado.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...amigoModificado,
        valoracion: +amigoModificado.valoracion,
      }),
    });
    const amigoModificadoAPI = await resp.json();
    setAmigos(
      amigos.map((amigo) => {
        if (amigo.id === amigoModificado.id) {
          return {
            ...amigo,
            ...amigoModificadoAPI,
          };
        } else {
          return amigo;
        }
      })
    );
  };
  useEffect(() => {
    cargarAmigos();
  }, []);
  return (
    <div className="container">
      <Cabecera nAmigos={amigos.length} />
      {!formularioAbierto && <Acciones toggleFormulario={toggleFormulario} />}
      {formularioAbierto && (
        <Formulario
          amigoEditado={amigoEditado}
          toggleFormulario={toggleFormulario}
          crearAmigo={crearAmigo}
          modificarAmigo={modificarAmigo}
        />
      )}
      <main className="principal">
        <ul className="amigos list-unstyled row">
          {amigos.map((amigo) => (
            <Amigo
              key={amigo.id}
              amigo={amigo}
              borrarAmigo={borrarAmigo}
              toggleFormulario={toggleFormulario}
              setAmigoEditado={setAmigoEditado}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
