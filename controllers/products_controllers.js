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

module.exports = products