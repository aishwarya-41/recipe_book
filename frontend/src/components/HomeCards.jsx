import { Link } from "react-router-dom";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import "../styles/HomeCards.css"

const HomeCards = () =>
{
    return (
        <div className="homeCard">
            <Card>
                <div className="search-recipes">
                    <h2><FaSearch/> All Recipes</h2>
                    <p>Search and discover recipes that match your cravings in seconds.</p>
                    <Link to="/search" className="search-recipes-button">Browse Recipes</Link>
                </div>
            </Card>

            <Card>
                <div className="add-recipes">
                    <h2><FaBookOpenReader/> Add Recipes</h2>
                    <p>Share your culinary creations with the world, one recipe at a time.</p>
                    <Link to="/add" className="add-recipes-button">Add Recipes</Link>
                </div>
            </Card>
        </div>
    );
}

export default HomeCards;