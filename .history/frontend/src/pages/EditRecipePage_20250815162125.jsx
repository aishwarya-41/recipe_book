import { useState } from 'react';
import '../styles/AddRecipePage.css'
import { useNavigate, useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const EditRecipePage = ({editMeal}) =>
{
    const meal = useLoaderData();
    const [name,setName] = useState(meal.name);
    const [category,setCategory] = useState(meal.category);
    const [ingredients,setIngredients] = useState(meal.ingredients);
    const [instructions,setInstructions] = useState(meal.instructions);
    const isFavorite = meal.isFavorite;

    const navigate = useNavigate();
    const {id} = useParams();

    const submitForm = (e) =>
    {
        e.preventDefault();
        const updatedMeal = {
            id,
            name,
            category,
            ingredients,
            instructions,
            isFavorite
        }

        editMeal(updatedMeal);

        toast.success("Dish Successfully Edited");

        return navigate('/search');
    }

    return (
        <>
        <form className='add-form' onSubmit={submitForm}>
            <h1 className='form-heading'>Edit Your Recipes</h1>

            <div className="form-group">
                <label>Name of dish</label>
                <input
                 type = "text"
                 placeholder="e.g Pizza"
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 required
                 />
            </div>

              <div className="form-group">
                <label>Category of dish</label>
                <input
                 type = "text"
                 placeholder="e.g Italian"
                 value={category}
                 onChange={(e)=>setCategory(e.target.value)}
                 required
                 />
            </div>

            <div className="form-group">
                <label>Ingredients of dish</label>
                <input
                 type = "text"
                 placeholder="e.g Crust, Pizza Sauce, Vegetables"
                 value={ingredients}
                 onChange={(e) => setIngredients(e.target.value.split(',').map(i => i.trim()))}
                 required
                 />
            </div>

             <div className="form-group">
                <label>Instructions of dish</label>
                <textarea
                 type = "text"
                 placeholder="e.g Prepare the Crust. Apply required amount of Sauce on it ..."
                 rows="6"
                 value={instructions}
                 onChange={(e)=>setInstructions(e.target.value)}
                 required
                 ></textarea>
            </div>

            <div>
                <center>
                    <button className="submit-button" type="submit">Submit</button>
                </center>
            </div>
        </form>
        </>
    );
}

export default EditRecipePage;