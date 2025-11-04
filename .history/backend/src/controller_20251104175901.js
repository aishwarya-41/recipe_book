import Recipe from "./models/";

// Get all recipes (sorted by most recent)
export const getAllRecipes = async (_, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error getting recipes", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new recipe
export const createRecipe = async (req, res) => {
  try {
    const { name, category, ingredients, instructions, isFavorite } = req.body;

    // validation
    if (!name || !category || !ingredients || !instructions) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newRecipe = new Recipe({
      name,
      category,
      ingredients,
      instructions,
      isFavorite: isFavorite || false,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error("Error creating recipe", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a recipe
export const updateRecipe = async (req, res) => {
  try {
    const { name, category, ingredients, instructions, isFavorite } = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { name, category, ingredients, instructions, isFavorite },
      { new: true }
    );

    if (!updatedRecipe)
      return res.status(404).json({ message: "Recipe not found" });

    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error("Error updating recipe", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a recipe
export const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe)
      return res.status(404).json({ message: "Recipe not found" });

    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error("Error deleting recipe", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
