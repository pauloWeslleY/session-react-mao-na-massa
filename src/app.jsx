import { ToastContainer } from "react-toastify";
import Header from "./_components/header";
import MainRoutes from "./router";

export default function App() {
  return (
    <div className="App">
      <Header />

      <MainRoutes />

      <ToastContainer autoClose={3000} />
    </div>
  );
}
