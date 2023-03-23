const getRecipes = (req, res) => {
    const { name } = req.query;

    if(name){
        res.status(200).send(`Busco las recetas con nombre ${name}`);
    }
    else{
        res.status(200).send("Busco todas las recetas");
    }
};

const getRecipesById = (req, res) => {
    const { id } = req.params;

    res.status(200).send(`Envía las recetas con ID ${id}`);
};

const createNewRecipe = (req, res) => {
    const { nombre, imagen, resumen, nivelSaludable, preparacion } = req.body;
    res.status(200).send(`Crearé una receta con los siguientes datos:
    nombre: ${nombre},
    imagen: ${imagen}, 
    resumen: ${resumen}, 
    nivelSaludable: ${nivelSaludable},
    preparacion: ${preparacion} 
    `);
};

module.exports = {
    getRecipes,
    getRecipesById,
    createNewRecipe
}
