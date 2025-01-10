import { useCallback, useState, useEffect } from "react";

export function App() {
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
    <div>
      <h1>teste</h1>

      <ul>
        {nutri.map((item) => {
          return <li key={item.id}>{item.titulo}</li>;
        })}
      </ul>
    </div>
  );
}
