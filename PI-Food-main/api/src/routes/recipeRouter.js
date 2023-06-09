const { Router } = require ("express");
const { getRecipes, getRecipesById, createNewRecipe } = require ("../handlers/recipesHandlers.js");

const recipesRouter = Router();

recipesRouter.get("/", getRecipes)

recipesRouter.get("/:id", getRecipesById)

recipesRouter.post("/", createNewRecipe)

module.exports = recipesRouter;