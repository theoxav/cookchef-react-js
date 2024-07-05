import { useState } from "react";
import styles from "./HomePage.module.scss";
import Recipe from "../../components/Recipe/Recipe";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";
import { useFetchRecipes } from "../../hooks";
import { updateRecipe as updateR } from "../../apis";

export default function HomePage() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [[recipes, setRecipes], isLoading] = useFetchRecipes(page);

  async function updateRecipe(updatedRecipe) {
    const savedRecipe = await updateR(updatedRecipe);
    setRecipes(
      recipes.map((r) => (r._id === savedRecipe._id ? savedRecipe : r))
    );
  }

  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="my-30">
        Découvrez nos nouvelles recettes{" "}
        <small className={styles.small}>- {recipes.length}</small>
      </h1>
      <div
        className={`card flex-fill d-flex flex-column p-20 mb-20 ${styles.contentCard}`}
      >
        <Search setFilter={setFilter} />
        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe key={r._id} recipe={r} updateRecipe={updateRecipe} />
              ))}
          </div>
        )}
        <div className="d-flex flex-row justify-content-center align-items-center p-20">
          <button onClick={() => setPage(page + 1)} className="btn btn-primary">
            Charger plus de recettes
          </button>
        </div>
      </div>
    </div>
  );
}
