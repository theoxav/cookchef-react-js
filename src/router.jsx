import { lazy, Suspense } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Loading from "./components/Loading/Loading";
import { getRecipe } from "./apis";

// Lazy loaded components
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

/*** Admin ***/
const AdminPage = lazy(() => import("./pages/Admin/AdminPage"));

/*** Admin Recipes ***/
const AdminRecipesPage = lazy(() =>
  import("./pages/Admin/AdminRecipes/AdminRecipesPage")
);
const AdminRecipesListPage = lazy(() =>
  import("./pages/Admin/AdminRecipes/AdminRecipesList/AdminRecipesListPage")
);
const AdminRecipesFormPage = lazy(() =>
  import("./pages/Admin/AdminRecipes/AdminRecipesForm/AdminRecipesFormPage")
);

/*** Admin Users ***/
const AdminUsersPage = lazy(() =>
  import("./pages/Admin/AdminUsers/AdminUsersPage")
);

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
        children: [
          {
            path: "recipes",
            element: (
              <Suspense fallback={<Loading />}>
                <AdminRecipesPage />
              </Suspense>
            ),
            children: [
              {
                path: "list",
                element: (
                  <Suspense fallback={<Loading />}>
                    <AdminRecipesListPage />
                  </Suspense>
                ),
              },
              {
                path: "new",
                element: (
                  <Suspense fallback={<Loading />}>
                    <AdminRecipesFormPage />
                  </Suspense>
                ),
              },
              {
                path: "edit/:recipeId",
                element: (
                  <Suspense fallback={<Loading />}>
                    <AdminRecipesFormPage />
                  </Suspense>
                ),
                loader: async ({ params: { recipeId } }) => getRecipe(recipeId),
              },
              {
                index: true,
                loader: async () => redirect("/admin/recipes/list"),
              },
            ],
          },
          {
            path: "users",
            element: (
              <Suspense fallback={<Loading />}>
                <AdminUsersPage />
              </Suspense>
            ),
          },
          {
            index: true,
            loader: async () => redirect("/admin/recipes/list"),
          },
        ],
      },
    ],
  },
]);
