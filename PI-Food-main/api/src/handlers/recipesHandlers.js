const { createRecipe, getRecipeById, searchByName, getAllrecipes } = require ("../controllers/recipeController");

const getRecipes = (req, res) => {
    const { name } = req.query;

    if(name) {
        searchByName(name);
        // res.status(200).send(`Busco las recetas con nombre ${name}`);
    }
    else{
        const todos = getAllrecipes();
        res.status(200).json({todos});
    }
};

const getRecipesById = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    
    try{
        const recipe = await getRecipeById(id, source);
        res.status(200).json({recipe});
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
};

const createNewRecipe = async (req, res) => {
    const { nombre, imagen, resumen, nivelSaludable, preparacion } = req.body;

    try{
        const newRecipe = await createRecipe(nombre, imagen, resumen, nivelSaludable, preparacion);
        return res.status(201).json({newRecipe});
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
};

module.exports = {
    getRecipes,
    getRecipesById,
    createNewRecipe
}
