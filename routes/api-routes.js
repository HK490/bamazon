const db = require("../models");

module.exports = function (app) {
    app.get("/home", function (req, res) {
        db.Product.findAll({}).then(function (result) {
            res.json(result);
        });
    });

    app.post("/home", function (req, res) {
        db.Product.create({
            product_name: req.body.product_name,
            department_name: req.body.department_name,
            price: req.body.price,
            stock_quantity: req.body.stock_quantity
        }).then(function(result) {
            res.json(result);
        });
    });

};
