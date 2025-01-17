import { Link } from "react-router";
import "./pagina-nao-encontrada.css";

export default function PaginaNaoEncontrada() {
  return (
    <div className="containerPaginaNaoEncontrada">
      <span>404</span>
      <h2>PaginaNaoEncontrada</h2>
      <Link to="/" className="linkPaginaNaoEncontrada">
        Veja todos os filmes
      </Link>
    </div>
  );
}
