const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors= require('cors')
const Kitten = require('./modal')
const port= process.env.PORT || 3000

// connection to DB
mongoose.connect('mongodb://rehman:rehman7788@ac-rhaoioc-shard-00-00.uf78o9z.mongodb.net:27017,ac-rhaoioc-shard-00-01.uf78o9z.mongodb.net:27017,ac-rhaoioc-shard-00-02.uf78o9z.mongodb.net:27017/?ssl=true&replicaSet=atlas-acbxc9-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(() => console.log('Connected to databass!'));

app.use(express.json())
cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
  })
// Routes
app.get('/', (req, res) => {
    console.log('Api is running successfully AR.')
    res.send('im in bro')
})
app.post('/send', async (req, res) => {
    const {data}  = req.body
    console.log(data)
    const ticket = await new Kitten({ data })
    await ticket.save()
    res.send('Data saved')
})

app.listen(port, () => {
    console.log('server is running')
})