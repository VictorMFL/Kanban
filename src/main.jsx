import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "../src/componentes/ErrorPage/Error";
import EsqueceuSenha from "../src/componentes/EsqueceuSenha/EsqueceuSenha";
import Cadastro from "../src/componentes/Cadastro/Cadastro"
import Boards from "../src/componentes/Navegacao/Boards/Boards";
import Equipes from "../src/componentes/Navegacao/Equipes/Equipes";
import Relatorios from "../src/componentes/Navegacao/Relatorios/Relatorios";
import Ajustes from "../src/componentes/Navegacao/Ajustes/Ajustes";

const router = createBrowserRouter([
  {
    path: "/Kanban",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/Kanban/boards",
    element: <Boards />,
  },

  {
    path: "/Kanban/equipes",
    element: <Equipes />,
  },

  {
    path: "/Kanban/relatorios",
    element: <Relatorios />,
  },

  {
    path: "/Kanban/ajustes",
    element: <Ajustes />,
  },

  {
    path: "/Kanban/esqueceu-senha",
    element: <EsqueceuSenha />,
  },

  {
    path: "Kanban//inscreva-se",
    element: <Cadastro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
