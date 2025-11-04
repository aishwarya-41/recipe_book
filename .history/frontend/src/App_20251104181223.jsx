import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import FavouritesPage from './pages/FavouritesPage';
import AddRecipePage from './pages/AddRecipePage';
import EditRecipePage from './pages/EditRecipePage';
import { mealLoader } from './components/Meal';
import axios from "axios";



function App() {

     const addFav = async (meal) => {
    try {
      const updatedMeal = { ...meal, isFavorite: !meal.isFavorite };
      await axios.put(`http://localhost:5001/api/recipes/${meal._id}`, updatedMeal);
    } catch (err) {
      console.error("Error updating favorite:", err);
    }
  };

  const addMeal = async (meal) => {
    try {
      await axios.post(`http://localhost:5001/api/recipes`, meal);
    } catch (err) {
      console.error("Error adding recipe:", err);
    }
  };

  const editMeal = async (meal) => {
    try {
      await axios.put(`http://localhost:5001/api/recipes/${meal._id}`, meal);
    } catch (err) {
      console.error("Error editing recipe:", err);
    }
  };

  const deleteMeal = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/recipes/${id}`);
    } catch (err) {
      console.error("Error deleting recipe:", err);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage addFav={addFav} deleteMeal={deleteMeal}/>}/>
          <Route path='/search' element={<SearchPage addFav={addFav} deleteMeal={deleteMeal}/>}/>
          <Route path='/favourites' element={<FavouritesPage addFav={addFav} deleteMeal={deleteMeal}/>}/>
           <Route path='/add' element={<AddRecipePage addMeal={addMeal}/>}/>
           <Route path='/edit/:id' element={<EditRecipePage editMeal={editMeal}/>} loader = {mealLoader}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  );

  return (
      <RouterProvider router = {router}/>
  );
}

export default App;
