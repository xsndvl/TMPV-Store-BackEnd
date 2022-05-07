const products = require("express").Router()
const db = require("../models")
const { Products } = db
const { Op } = require("sequelize")

products.get("/", async(req, res) => {
    try {
        var foundProducts = await Products.findAll()
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

products.get("/:type", async(req, res) => {
    try {
        const productType = (product) => {
            switch(product) {
                case "hoodies":
                    return "Hoodie"
                case "shirts":
                    return "Shirt"
                case "stickers":
                    return "Sticker"
            }
        }
        let specificProduct = await Products.findAll({
            where: {product_type: productType(req.params.type)}
        })
        res.status(200).json(specificProduct)
    } catch(err) {
        res.status(400).json(err)
    }
})

products.get("/:type/:id", async(req, res) => {
    try {
        let detailedView = await Products.findOne({
            where: {product_id: req.params.id}
        })
        res.status(200).json(detailedView)
    } catch(err) {
        res.json(err)
    }
})

module.exports = products