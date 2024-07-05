import { NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>
        <NavLink to="/admin">Ajouter une recette</NavLink>
      </li>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
};

export default HeaderMenu;
