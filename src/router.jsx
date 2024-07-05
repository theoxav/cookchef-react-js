import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Loading from "./components/Loading/Loading";

// Lazy loaded components
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AdminPage = lazy(() => import("./pages/Admin/Admin"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "admin",
        element: (
          <Suspense fallback={<Loading />}>
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);
