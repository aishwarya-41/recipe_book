import Meals from "../components/Meals";
import { FaSmileBeam } from "react-icons/fa";
import "../styles/Meal.css"
import "../styles/FavouritesPage.css"

const FavouritesPage = ({addFav,deleteMeal}) =>
{
    return (
        <div className="meals">
            <Meals onlyFavourites={true} addFav={addFav} deleteMeal={deleteMeal} heading={<><FaSmileBeam/> Favourites</>}/>
        </div>
    )
}

export default FavouritesPage;