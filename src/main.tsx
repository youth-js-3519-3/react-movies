import { StrictMode, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import Lists from "./pages/Lists";

export type Route = {
  path: string;
  element: ReactElement;
  children?: Route[];
  title?: string;
}

export const routes = [
  {

  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      { 
        index: true, 
        path: 'home',
        element: <Home /> 
      },
      { 
        path: "search", 
        element: <Search />,
        title: "Pesquisa"
      },
      { 
        path: ":movieId", 
        element: <Movie />
      },
      { 
        path: "lists", 
        element: <Lists />,
        title: "Suas Listas"
      },
    ],
  },
]

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
