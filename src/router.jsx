import { useRoutes } from "react-router";
import Filmes from "./pages/filmes";
import Home from "./pages/home";
import PaginaNaoEncontrada from "./pages/pagina-nao-encontrada";
import Favoritos from "./pages/favoritos";

export default function MainRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      index: true,
    },
    {
      path: "/filme/:filmeId",
      element: <Filmes />,
    },
    {
      path: "/favoritos",
      element: <Favoritos />,
    },
    {
      path: "*",
      element: <PaginaNaoEncontrada />,
    },
  ]);
}
