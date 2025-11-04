import express from "express";
import {getAllRecipes, createRecipe, updateRecipe, deleteRecipe} from "./controller.js"; 

const router = express.Router();

router.get("/", getAllRecipes);


router.post("/", createRecipe);

// PUT (update) an existing recipe by ID
router.put("/:id", updateRecipe);

// DELETE a recipe by ID
router.delete("/:id", deleteRecipe);

export default router;
