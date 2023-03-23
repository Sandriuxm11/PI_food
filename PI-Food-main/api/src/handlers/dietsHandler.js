const getAllDiets = (req, res) => {
    res.status(200).send("Busco los tipos de dietas");
}

module.exports = {getAllDiets};