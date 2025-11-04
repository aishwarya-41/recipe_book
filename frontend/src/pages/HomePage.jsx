import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import Meals from "../components/Meals";
import ViewRecipes from "../components/ViewRecipes";

const HomePage = ({addFav,deleteMeal}) =>
{
    return (
        <>
        <Hero/>
        <HomeCards/>
        <Meals isHome={true} addFav={addFav} deleteMeal={deleteMeal} heading="Recents"/>
        <ViewRecipes/>
        </>
    );
}

export default HomePage;