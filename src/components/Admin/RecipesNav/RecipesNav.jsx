import { NavLink } from "react-router-dom";
import styles from "./RecipesNav.module.scss";

const RecipesNav = () => {
  return (
    <ul className={styles.list}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="list"
      >
        Liste des recettes
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="new"
      >
        Ajouter une recette
      </NavLink>
    </ul>
  );
};

export default RecipesNav;
