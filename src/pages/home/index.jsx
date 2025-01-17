import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import { filmesServices } from "../../services/filmes.services";
import "./home.css";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [carregandoFilmes, setCarregandoFilmes] = useState(false);
  const [erro, setErro] = useState("");

  const buscarListaDeFilmes = useCallback(async () => {
    setCarregandoFilmes(true);
    try {
      const resultados = await filmesServices.buscarTodosFilmes();
      setFilmes(resultados.slice(0, 10));
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregandoFilmes(false);
    }
  }, []);

  useEffect(() => {
    buscarListaDeFilmes();
  }, []);

  if (carregandoFilmes) {
    return (
      <div className="loading">
        <span>Carregando filmes...</span>
      </div>
    );
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div className="container">
      <div className="listaFilmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.title}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
