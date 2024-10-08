import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const Router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={Router} />
      <NextUIProvider>
        <BrowserRouter></BrowserRouter>
      </NextUIProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}