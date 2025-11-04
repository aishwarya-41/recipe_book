import Meals from "../components/Meals";
import "../styles/Meal.css"

const SearchPage = ({addFav,deleteMeal}) =>
{
    return (
        <div className="meals">
            <Meals deleteMeal={deleteMeal} addFav={addFav}/>
        </div>
    )
}

export default SearchPage;