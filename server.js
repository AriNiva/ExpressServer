//Express.js palvelin//
const path = require('path')
const express = require('express')

const app = express()

// Tämä rivi lukee 'herkut.json' tiedoston juurikansiossa ja lataa sen sisällön.
// 'require' funktio palauttaa ladatun sisällön, joka sitten tallennetaan muuttujaan nimeltä 'herkut'.
// Nyt 'herkut' muuttuja sisältää 'herkut.json' tiedoston datan, jota voidaan käyttää ohjelmassa.
const herkut = require('./herkut.json')

//GET ALL etsitään kaikki herkut jsonista
app.get('/api/herkut', (req, res) => {
    res.json(herkut)
})

//Tehdään polkumääritys public kansioon
const polku = path.join(__dirname, './public')

//Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http requestin
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})