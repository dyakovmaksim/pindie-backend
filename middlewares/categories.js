const categories = require('../models/category');

const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
        console.log(req.body);
        req.category = await categories.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
    }
};

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({});
    next();
}

module.exports = {
    findAllCategories,
    createCategory
};