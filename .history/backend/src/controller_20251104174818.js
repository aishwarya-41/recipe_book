import Recipe from "./models/Recipe.js" 

export const getAllRecipes = async (_res) => {
     try {
        const notes = await Note.find().sort({createdAt:-1}); //sort in reverse order of date
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error getting notes",error);
        res.status(500).json({message:"Internal server error"});
    }
}