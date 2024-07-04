import styles from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
};

export default HeaderMenu;
