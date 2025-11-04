import Meal from "./Meal";
import { useState, useEffect } from "react";
import axios from "axios";


const Meals = ({isHome=false, onlyFavourites=false, addFav,deleteMeal,heading="All Recipes"}) =>
{
    const [meals,setMeals] = useState([]);
    const [loading,setLoading] = useState(true);
   
    useEffect(() => {const fetchMeals = async () =>
    {
        const apiUrl = isHome? '/api/meals?_limit=3': '/api/meals';
        try
        {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setMeals(data);
        }
        catch (e)
        {
            console.error(e);
        }
        finally
        {
            setLoading(false);
        }
        };
        fetchMeals();
        }
    ,[])
   
    const fav = onlyFavourites? meals.filter(meal=>meal.isFavorite): meals;
    return (
        <div className="meals-main">
             <h1 className="mealHeading">{heading}</h1>
            {loading? "Loading...": 
            <div className="meals">
                {fav.map((meal)=> 
                (<Meal key={meal.id} meal={meal} addFav={addFav} deleteMeal={deleteMeal}/>)
                )}
            </div>
            }
        </div>
    );
}

export default Meals;