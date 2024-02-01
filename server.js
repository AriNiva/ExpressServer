//Express.js palvelin//
const path = require('path')
const express = require('express')
const fs = require('fs').promises

const app = express()

// Tämä rivi lukee 'herkut.json' tiedoston juurikansiossa ja lataa sen sisällön.
// 'require' funktio palauttaa ladatun sisällön, joka sitten tallennetaan muuttujaan nimeltä 'herkut'.
// Nyt 'herkut' muuttuja sisältää 'herkut.json' tiedoston datan, jota voidaan käyttää ohjelmassa.
const herkut = require('./herkut.json')

//GET ALL etsitään kaikki herkut jsonista
app.get('/api/herkut', (req, res) => {
    res.json(herkut)
})

//Pinkoodin lukeminen txt tiedostosta palvelimelta ja lähettäminen selaimelle
app.get('/api/getpin', async (req, res) => {
    try {
        //Read the content of the text file
        const savedPin = await fs.readFile('./pin.txt', 'utf-8')

        //Send the file content as the response
        res.send(savedPin)
    } catch (error) {
        console.error('Error reading file', error)
        res.status(500).send('Internal Server Error')
    }
    })


//Tehdään polkumääritys public kansioon
const polku = path.join(__dirname, './public')

//Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http requestin
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})