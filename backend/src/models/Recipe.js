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
      type: [String], 
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false, 
    },
  },
  { timestamps: true } 
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
