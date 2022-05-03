require("dotenv").config()
const express = require("express")
const app = express()
const { Sequelize } = require("sequelize")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send("Simple Hello")
})

app.get("/hey", (req, res) => {
    res.send("This is /hey")
})

app.listen(process.env.PORT, () => console.log(`Working on port ${process.env.PORT}`))

