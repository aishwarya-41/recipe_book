import express from "express";
import {getAllRecipes, createRecipe, updateRecipe, deleteRecipe,} from "./controller.js"; // adjust path if needed

const router = express.Router();

// GET all recipes
router.get("/", getAllRecipes);

// POST a new recipe
router.post("/", createRecipe);

// PUT (update) an existing recipe by ID
router.put("/:id", updateRecipe);

// DELETE a recipe by ID
router.delete("/:id", deleteRecipe);

export default router;
