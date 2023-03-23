const { Router } = require ("express");
const { getAllDiets } = require ("../handlers/dietsHandler");

const dietsRouter = Router();

dietsRouter.get("/", getAllDiets);

module.exports = dietsRouter;