const { Receta } = require ("../db");
const axios = require ("axios");
const { API_KEY } = process.env;

const searchByName = () =>{};

const getAllrecipes = async () =>{
    // let recipesBdd;
    const responseBdd = await Receta.findAll();
    // recipesBdd = {
    //     id: responseBdd.id,
    //     nombre: responseBdd.nombre,
    //     imagen: responseBdd.imagen,
    //     resumen:responseBdd.resumen,
    //     nivelSaludable: responseBdd.nivelSaludable,
    //     ingredientes: responseBdd.ingredientes,
    //     preparacion: responseBdd.preparacion,
    //     created: responseBdd.created,
    // }

    // const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexsearch?number=100?apiKey=${API_KEY}`);

    return [...responseBdd, //...recipesBdd
        // , ...recipesApi
    ];
};

const getRecipeById = async (id, source) => {
    let recipeById;

    if(source === "api"){
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        recipeById = {
            id: response.data.id,
            nombre: response.data.title,
            imagen: response.data.image,
            resumen: response.data.summary,
            nivelSaludable: response.data.healthScore,
            ingredientes: response.data.extendedIngredients.map(ingredient => ({
                name: ingredient.name,
                amount: ingredient.amount,
                unit: ingredient.unit,
            })),
            preparacion: response.data.instructions,
            created: false,
        }
    }
    else{
        recipeById = await Receta.findByPk(id);
    }

    return recipeById;
};

// 716426

const createRecipe = async (nombre, imagen, resumen, nivelSaludable, preparacion) =>{
    let newRecipe;

    const response = await Receta.create({nombre, imagen, resumen, nivelSaludable, preparacion});
    newRecipe = {
        id: response.id,
        nombre: response.nombre,
        imagen: response.imagen, 
        resumen: response.resumen, 
        nivelSaludable: response.nivelSaludable, 
        preparacion: response.preparacion,
        created: response.created,
    }

    return newRecipe;
};

module.exports = {
    createRecipe, getRecipeById, searchByName, getAllrecipes
}