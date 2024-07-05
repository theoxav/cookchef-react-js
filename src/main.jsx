import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import { ApiContext } from "./context/ApiContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/recipes">
      <RouterProvider router={router} />
    </ApiContext.Provider>
  </StrictMode>
);
