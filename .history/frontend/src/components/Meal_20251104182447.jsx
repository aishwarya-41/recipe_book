// src/components/Meal.jsx
import "../styles/Meal.css";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

/**
 * Meal component
 * Props:
 *  - meal: recipe object from backend (uses _id)
 *  - addFav: function passed from App to toggle favorite (expects full meal object)
 *  - deleteMeal: function passed from App to delete a meal (expects _id)
 *  - index: optional number to alternate styles
 */
const Meal = ({ meal, addFav, deleteMeal, index = 0 }) => {
  const navigate = useNavigate();
  const mealHeading = index % 2 === 0 ? "greenHeading" : "orangeHeading";
  const fav = meal.isFavorite ? <FaHeart className="fav" /> : "Add to Favourites";
  const fav_class = meal.isFavorite ? "fav-button" : "not-fav-button";

  const handleFav = async () => {
    try {
      await addFav(meal); // App handles the axios PUT to /api/recipes/:id
      if (!meal.isFavorite) {
        toast.success("Added to favourites successfully");
        navigate("/favourites");
      } else {
        toast.info("Removed from favourites");
        navigate("/search");
      }
    } catch (err) {
      console.error("Error toggling favourite:", err);
      toast.error("Failed to update favourite");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMeal(meal._id); // App handles axios DELETE to /api/recipes/:id
      toast.success("Deleted successfully");
      navigate("/search");
    } catch (err) {
      console.error("Error deleting meal:", err);
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="meal">
      <h1 className={mealHeading}>
        {meal.name}
        <button className="remove-item" onClick={handleDelete} aria-label="delete">
          <FaTrash />
        </button>
      </h1>

      <Link to={`/edit/${meal._id}`} className="edit-meal">
        Edit
      </Link>

      <p>{meal.category}</p>

      <ul>
        {Array.isArray(meal.ingredients) &&
          meal.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
      </ul>

      <p>{meal.instructions}</p>

      <button className={fav_class} onClick={handleFav}>
        {fav}
      </button>
    </div>
  );
};

/**
 * Loader to fetch a single meal (used in route loader)
 * Expects the router to pass params.id which should be the MongoDB _id
 */
const mealLoader = async ({ params }) => {
  try {
    if (!params?.id) throw new Error("Meal ID not provided in route params");
    const res = await axios.get(`http://localhost:5001/api/recipes/${params.id}`);
    return res.data;
  } catch (err) {
    console.error("Error loading meal:", err);
    // Re-throw so react-router's error boundary can handle it
    throw err;
  }
};

export { Meal as default, mealLoader };
