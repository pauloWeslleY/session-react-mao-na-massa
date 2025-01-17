import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { filmesServices } from "../../services/filmes.services";
import "./filme-info.css";

export default function Filmes() {
  const [dadosFilme, setDadosFilme] = useState(null);
  const [carregandoDetalhesFilme, setCarregandoDetalhesFilme] = useState(false);
  const { filmeId } = useParams();
  const navigate = useNavigate();

  const buscarDetalhesDoFilmePorId = useCallback(async () => {
    setCarregandoDetalhesFilme(true);
    try {
      const resultado = await filmesServices.buscarFilmePorId(filmeId);
      setDadosFilme(resultado);
    } catch (error) {
      console.log(error.message);
      navigate("/home");
    } finally {
      setCarregandoDetalhesFilme(false);
    }
  }, [filmeId, navigate]);

  useEffect(() => {
    buscarDetalhesDoFilmePorId();

    return () => {
      console.log("Componente foi desmontado!");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlerSalvarFilme() {
    let storageKey = "@primeFlix";
    const minhaLista = localStorage.getItem(storageKey);

    let filmesSalvos = JSON.parse(minhaLista) ?? [];

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === dadosFilme.id
    );

    if (hasFilme) {
      toast.warn("Filme já existente");
      return;
    }

    filmesSalvos.push(dadosFilme);
    localStorage.setItem(storageKey, JSON.stringify(filmesSalvos));
    toast.success("Filme salvo");
  }

  function handlerNavigateYouTube() {
    return `https://www.youtube.com/results?search_query=${dadosFilme.title} Trailer`;
  }

  if (carregandoDetalhesFilme || !dadosFilme) {
    return (
      <div className="filmeInfo">
        <span>Carregando...</span>
      </div>
    );
  }

  return (
    <div className="filmeInfo">
      <h1>{dadosFilme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original${dadosFilme.backdrop_path}`}
        alt={dadosFilme.title}
      />

      <h3>Sinopse</h3>
      <span>{dadosFilme.overview}</span>
      <strong>Avaliação: {dadosFilme.vote_average}/10</strong>

      <div className="areaButtons">
        <button className="buttonFilmeInfo" onClick={handlerSalvarFilme}>
          Salvar
        </button>

        <a
          target="blank"
          rel="external"
          href={handlerNavigateYouTube()}
          className="buttonFilmeInfo"
        >
          Trailer
        </a>
      </div>
    </div>
  );
}
