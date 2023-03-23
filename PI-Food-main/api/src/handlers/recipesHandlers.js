const getRecipes = (req, res) => {
    res.status(200).send("Busco todas las recetas y también por nombre");
};

const getRecipesById = (req, res) => {
    res.status(200).send("Busco las recetas por ID");
};

const createNewRecipe = (req, res) => {
    res.status(200).send("Creo recetas nuevas en la BD");
};

module.exports = {
    getRecipes,
    getRecipesById,
    createNewRecipe
}
