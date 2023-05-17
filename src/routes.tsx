import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/layout";
import { Home } from "./pages/home";
import { GameDetail } from "./pages/game-getail";
import { Error } from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "games/:slug",
        element: <GameDetail />,
      },
    ],
  },
]);
