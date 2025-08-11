// [TheatreDynamic] #3
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { routes } from "./router";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeProvider from "./theme/ThemeProvider";
import { ScrollProgressProvider } from "./hooks/useScrollProgress";

const router = createBrowserRouter(routes, { basename: "/" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ScrollProgressProvider>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </ScrollProgressProvider>
    </ThemeProvider>
  </React.StrictMode>
);
