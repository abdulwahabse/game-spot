import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";

import GenericErrorPage from "./pages/GenericErrorPage";
import PageNotFoundError from "./pages/PageNotFoundError";

const router = createBrowserRouter([
  {
    path: "/game-spot/",
    element: <Layout />,
    errorElement: <GenericErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
      { path: "*", element: <PageNotFoundError /> },
    ],
  },
]);

export default router;
