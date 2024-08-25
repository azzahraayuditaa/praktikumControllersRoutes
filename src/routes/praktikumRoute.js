const express = require('express')
const app = express()

app.use(express.json())

const praktikumController = require(`../controllers/praktikumController`)

app.get("/profil/:nama/:umur",praktikumController.profil)
// ini
app.post("/bujur_sangkar", praktikumController.bujurSangkar)

module.exports = app