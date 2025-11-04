import "../styles/Meal.css";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Meal = ({ meal, addFav, deleteMeal }) => {
  const navigate = useNavigate();
  const mealHeading = meal.id % 2 ? "greenHeading" : "orangeHeading";
  const fav = meal.isFavorite ? <FaHeart className="fav" /> : "Add to Favourites";
  const fav_class = meal.isFavorite ? "fav-button" : "not-fav-button";

  const handleFav = async () => {
    try {
      const updatedMeal = { ...meal, isFavorite: !meal.isFavorite };
      await axios.put(`http://127.0.0.1:8000/meals/${meal.id}`, updatedMeal);

      if (updatedMeal.isFavorite) {
        toast.success("Added to favourites successfully");
        navigate("/favourites");
      } else {
        toast.error("Removed from favourites successfully");
        navigate("/search");
      }
    } catch (err) {
      console.error("Error updating favourite:", err);
      toast.error("Failed to update favourite");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/meals/${meal.id}`);
      toast.error("Deleted successfully");
      navigate("/search");
    } catch (err) {
      console.error("Error deleting meal:", err);
      toast.error("Failed to delete meal");
    }
  };

  return (
    <div className="meal">
      <h1 className={mealHeading}>
        {meal.name}
        <button className="remove-item" onClick={handleDelete}>
          <FaTrash />
        </button>
      </h1>

      <Link to={`/edit/${meal.id}`} className="edit-meal">
        Edit
      </Link>
      <p>{meal.category}</p>
      <ul>
        {meal.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{meal.instructions}</p>
      <button className={fav_class} onClick={handleFav}>
        {fav}
      </button>
    </div>
  );
};

// Loader for a single meal
const mealLoader = async ({ params }) => {
  try {
    const res = await axios.get(`http://127.0.0.1:5000/meals/${params.id}`);
    return res.data;
  } catch (err) {
    console.error("Error loading meal:", err);
    throw err;
  }
};

export { Meal as default, mealLoader };
