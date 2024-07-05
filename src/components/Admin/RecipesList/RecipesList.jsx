import { useFetchRecipes } from "../../../hooks";
import styles from "./RecipesList.module.scss";
import { deleteRecipe as deleteR } from "../../../apis";
import { NavLink } from "react-router-dom";

const RecipesList = () => {
  const [[recipes, setRecipes]] = useFetchRecipes();

  async function deleteRecipe(_id) {
    await deleteR(_id);
    setRecipes(recipes.filter((r) => r._id !== _id));
  }
  return (
    <ul className={styles.list}>
      {recipes.length ? (
        recipes.map((recipe) => (
          <li key={recipe._id} className="d-flex align-items-center">
            <span className="flex-fill">{recipe.title}</span>
            <NavLink to={`../edit/${recipe._id}`}>
              <button className="btn btn-primary">Éditer</button>
            </NavLink>
            <button
              className="ms-5 btn btn-danger"
              onClick={() => deleteRecipe(recipe._id)}
            >
              Supprimer
            </button>
            <NavLink></NavLink>
          </li>
        ))
      ) : (
        <p>Aucune recette</p>
      )}
    </ul>
  );
};

export default RecipesList;
