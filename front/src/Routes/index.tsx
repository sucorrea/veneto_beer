import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Produtos from "../Pages/Produtos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produtos",
    element: <Produtos />,
  },
]);
