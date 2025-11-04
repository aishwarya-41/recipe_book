import express from "express";
import {getAllRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipeById} from "./controller.js"; 

const router = express.Router();

router.get("/", getAllRecipes);

router.post("/", createRecipe);

router.put("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

router.get("//:id", getRecipeById);


export default router;
