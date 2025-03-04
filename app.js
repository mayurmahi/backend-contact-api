const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoute = require('./routes/user')
const contactRoute = require('./routes/contact')

// Enable CORS
app.use(cors())

mongoose.connect('mongodb+srv://mayur:mayur@cluster0.7dydx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(res => { console.log("Connected to database") })
.catch(err => { console.log(err) })

app.use(bodyParser.json())

app.use('/user', userRoute)
app.use('/contact', contactRoute)

// Handle 404
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'Bad request' })
})

module.exports = app
