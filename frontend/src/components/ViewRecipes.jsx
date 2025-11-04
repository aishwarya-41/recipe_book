import { FaArrowRight } from "react-icons/fa"
import "../styles/ViewRecipes.css"
import { Link } from "react-router-dom"
const ViewRecipes = () =>
{
    return (
        <div className="view-recipes">
            <h1> Check out your favourite recipes...</h1>
            <Link to='/favourites'> <FaArrowRight className="arrow"/> </Link>
        </div>
    )
}

export default ViewRecipes;