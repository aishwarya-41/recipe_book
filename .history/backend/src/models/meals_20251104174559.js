import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String], // Array of ingredient names
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false, // Default to false if not provided
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
