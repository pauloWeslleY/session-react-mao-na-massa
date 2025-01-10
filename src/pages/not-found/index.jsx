import { Link } from "react-router";

export default function NotFound() {
  return (
    <div>
      <h1>Pagina não encontrada</h1>
      <br />

      <span>paginas</span>
      <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </div>
  );
}
