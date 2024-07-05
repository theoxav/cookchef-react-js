import { useContext } from "react";
import styles from "./Recipe.module.scss";
import { ApiContext } from "../../context/ApiContext";

function Recipe({
  recipe: { title, image, liked, _id },
  toggleLikedRecipe,
  deleteRecipe,
}) {
  const BASE_URL_API = useContext(ApiContext);

  async function handleClick() {
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ liked: !liked }),
      });
      if (response.ok) {
        const updatedRecipe = await response.json();
        toggleLikedRecipe(updatedRecipe);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function handleClickDelete(e) {
    e.stopPropagation();
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        deleteRecipe(_id);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div onClick={handleClick} className={styles.recipe}>
      <i onClick={handleClickDelete} className="fa-solid fa-xmark"></i>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{title}</h3>
        <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
      </div>
    </div>
  );
}

export default Recipe;
