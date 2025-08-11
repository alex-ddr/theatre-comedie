// [TheatreComedie-Vite] #3
import type { RouteObject } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pieces from "./pages/Pieces";
import Piece from "./pages/Piece";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "pieces", element: <Pieces /> },
            { path: "pieces/:slug", element: <Piece /> },
            { path: "a-propos", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "*", element: <div className="p-6">404</div> },
        ],
    },
];
