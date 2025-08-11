// [TheatreComedie-Vite] #3
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { routes } from "./router";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeProvider from "./theme/ThemeProvider";

const router = createBrowserRouter(routes, { basename: "/" });

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <ErrorBoundary>
                <RouterProvider router={router} />
            </ErrorBoundary>
        </ThemeProvider>
    </React.StrictMode>,
);
