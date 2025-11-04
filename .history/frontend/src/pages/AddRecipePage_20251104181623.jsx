import { useState } from 'react';
import '../styles/AddRecipePage.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AddRecipePage = ({addMeal}) =>
{
    const [name,setName] = useState("");
    const [category,setCategory] = useState("");
    const [ingredients,setIngredients] = useState([]);
    const [instructions,setInstructions] = useState("");
    const isFavorite = false;
    const navigate = useNavigate();

    const submitForm = async (e) =>
    {
        e.preventDefault();
        const newMeal = {
            name,
            category,
            ingredients,
            instructions,
            isFavorite
        }

        addMeal(newMeal);

        toast.success("New dish Added Successfully");

        return navigate('/search');
    }

    return (
        <>
        <form className='add-form' onSubmit={submitForm}>
            <h1 className='form-heading'>Add Your Favourite Recipes</h1>

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

export default AddRecipePage;