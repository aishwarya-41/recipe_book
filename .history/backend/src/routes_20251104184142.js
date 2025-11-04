import express from "express";
import {getAllRecipes, createRecipe, updateRecipe, deleteRecipe, get} from "./controller.js"; 

const router = express.Router();

router.get("/", getAllRecipes);

router.post("/", createRecipe);

router.put("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

export default router;
