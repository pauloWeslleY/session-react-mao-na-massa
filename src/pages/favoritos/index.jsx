import { useState } from "react";
import "./favoritos.css";
import { useEffect } from "react";
import { useCallback } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmesFavoritos, setFilmesFavoritos] = useState([]);
  const hasFilmesFavoritos = filmesFavoritos.length === 0;
  let storageKey = "@primeFlix";

  const minhaListaFilmeFavoritos = useCallback(() => {
    const minhaLista = localStorage.getItem(storageKey);
    const meuFilmesFavoritos = JSON.parse(minhaLista) ?? [];
    setFilmesFavoritos(meuFilmesFavoritos);
  }, [storageKey]);

  useEffect(() => {
    minhaListaFilmeFavoritos();
  }, [minhaListaFilmeFavoritos]);

  function handlerDeletarFilme(id) {
    const filtroFilmes = filmesFavoritos.filter((filme) => filme.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(filtroFilmes));
    setFilmesFavoritos(filtroFilmes);
    toast.success("Filme removido!");
  }

  return (
    <div className="meusFilmes">
      <h1>Meus filmes</h1>

      {hasFilmesFavoritos && (
        <div className="meusFilmesSalvos">
          <h3>Nenhum filme salvo</h3>
        </div>
      )}

      <ul>
        {filmesFavoritos.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>

                <button onClick={() => handlerDeletarFilme(filme.id)}>
                  Excluir
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
