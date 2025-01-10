import { NavLink } from "react-router";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <h2>John doe</h2>

      <nav className="menuNav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/posts">App</NavLink>
      </nav>
    </header>
  );
}
