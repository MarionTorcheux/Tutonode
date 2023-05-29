const express = require('express')
const app = express()
const parkings = require('./parkings.json')
const reservations = require('./reservations.json')
app.use(express.json());


app.get('/parkings', (req,res) =>
{    res.status(200).json(parkings)})

app.get('/parkings/:id', (req,res) =>
{    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)})

app.post('/parkings',
    (req, res) => {
        parkings.push(req.body)
        res.status(200).json(parkings)
    })

app.put('/parkings/:id',
    (req, res) => {
        const id = parseInt(req.params.id)
        const parking = parkings.find(parking => parking.id === id)
        parking.name = req.body.name
        parking.city = req.body.city
        parking.type = req.body.type
        res.status(200).json(parkings)
    })

app.delete('/parkings/:id',
    (req, res) => {
    const id = parseInt(req.params.id)
        const parking = parkings.find(parkings => parkings.id === id)
        const index = parkings.indexOf(parking)
        parkings.splice(index, 1)
        res.status(200).json(parkings)
    })

app.get('/reservations', (req,res) =>
{   res.status(200).json(reservations)
})

app.get('/reservations/:id', (req,res) =>
{    const id = parseInt(req.params.id)
    const reservation = reservations.find(reservation => reservation.id === id)
    res.status(200).json(reservation)
})

app.get('/reservations/parking/:id', (req,res) =>
{    const id = parseInt(req.params.id)
    const reservation = reservations.find(reservation => reservation.parkingId === id)
    res.status(200).json(reservation)
})


app.listen(8080, () => {
console.log("Serveur à l'écoute")})


