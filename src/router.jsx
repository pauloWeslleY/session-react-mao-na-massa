import { useRoutes } from "react-router";
import Posts from "./_components/posts";
import Sobre from "./pages/sobre";
import Home from "./pages/home";
import Contato from "./pages/contato";
import Header from "./_components/header";
import NotFound from "./pages/not-found";

export default function MainRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contato", element: <Contato /> },
    { path: "/sobre", element: <Sobre /> },
    { path: "/posts", element: <Posts /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <Header />

      {routes}
    </>
  );
}
