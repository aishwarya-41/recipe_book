import "../styles/Meal.css"
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Meal = ({meal,addFav,deleteMeal}) =>
{
    const navigate = useNavigate()
    const mealHeading = meal._id%2 ? "greenHeading":"orangeHeading";
    const fav = meal.isFavorite? <FaHeart className="fav"/>: "Add to Favourites";
    const fav_class =  meal.isFavorite? "fav-button": "not-fav-button";
    
    const handleFav = async () =>
    {
        if (!meal.isFavorite)
        {
            await addFav(meal);
            toast.success("Added to favourites Successfully")
            return navigate('/favourites')
        }
        else
        {
            await addFav(meal);
            toast.error("Removed from favourites Successfully")
            return navigate('/search')
        }
    }

    const handleDelete = async () =>
    {
        await deleteMeal(meal._id);
        toast.error("Deleted Successfully")
        return navigate('/search');
    }
    return (
        <div className="meal">
            <h1 className={mealHeading}>{meal.name} 
                  <button className="remove-item" onClick={handleDelete}><FaTrash/></button>
            </h1>
            <Link to={`/edit/${meal._id}`} className="edit-meal">Edit</Link>
            <p>{meal.category}</p>
            <ul>
                {meal.ingredients.map((ingredient,index)=>(
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>{meal.instructions}</p>
            <button className={fav_class} onClick={handleFav}>{fav}</button>
            
        </div>
    )
}

const mealLoader = async({params}) =>
{
    const res = await fetch(`http://localhost:5001/api/recipes/${params.id}`);
    const data = await res.json();
    return data;
}
export {Meal as default, mealLoader};