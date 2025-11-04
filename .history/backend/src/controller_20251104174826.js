import Recipe from "./models/Recipe.js" 

export const getAllRecipes = async (_res) => {
     try {
        const recipes = await Note.find().sort({createdAt:-1}); 
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error getting notes",error);
        res.status(500).json({message:"Internal server error"});
    }
}