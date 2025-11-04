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


function App() {

   const addFav = async (meal) =>
  {
    const updatedMeal = { ...meal, isFavorite: !meal.isFavorite };
    const res = await fetch(`/api/meals/${meal.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMeal)
      }
    );
  
    return;
  }

    const addMeal = async (meal) =>
  {
    const res = await fetch(`/api/meals`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(meal)
      }
    );
  
    return;
  }

   const editMeal = async (meal) =>
  {
    const res = await fetch(`/api/meals/${meal.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(meal)
      }
    );
  
    return;
  }

   const deleteMeal = async (id) =>
  {
    const res = await fetch(`/api/meals/${id}`,
      {
        method: 'DELETE',
      }
    );
    return;
  }
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
