const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const cors = require('cors')
app.use(cors())

const Streamer = require('./models/streamers')

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('db connected!')
}).catch((err) => {
    console.log(err)
})

app.get('/' , (req, res) => {
    res.send('TSDB!')
})

app.get('/data', (req, res) => {
    Streamer.find({}).then((data) => {
        res.json(data)}).catch((err) => {
            res.send(err)
        })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})