import { useCallback, useState, useEffect } from "react";
import "./styles.css";

export default function Posts() {
  const [nutri, setNutri] = useState([]);

  const loadNutriList = useCallback(async () => {
    try {
      const URL = "https://sujeitoprogramador.com/rn-api/?api=posts";
      const data = await fetch(URL);
      const response = await data.json();
      setNutri(response);
    } catch (error) {
      console.log(error.message);
      throw new Error("Erro ao carregar a lista de nutricionistas");
    }
  }, []);

  useEffect(() => {
    loadNutriList();
  }, [loadNutriList]);

  return (
    <div className="container">
      <header className="headerPost">
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong>{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <a href="#" className="botao">
              Acessar
            </a>
          </article>
        );
      })}
    </div>
  );
}
