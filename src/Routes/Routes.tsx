import { createBrowserRouter } from "react-router-dom";
import ErroPage from "../pages/ErroPage";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import CartMovies from "../components/CartMovies/CartMovies";

export const router = createBrowserRouter([
      {
        path: "/",
        element: <Main />,
        errorElement: <ErroPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/mycart",
            element: <CartMovies />,
          },
        ],
      },
    ]);