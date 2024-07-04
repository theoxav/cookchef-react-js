import Recipe from "../Recipe/Recipe";
import styles from "./Content.module.scss";
import { data } from "../../data/recipes";

function Content() {
  const recipes = data;
  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} title={recipe.title} image={recipe.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
