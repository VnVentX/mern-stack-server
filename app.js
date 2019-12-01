const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Middleware
app.use(cors())
//JSON parser
app.use(bodyParser.json())

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to DB at port 4000')
)

//Import routes
const userRoute = require('./routes/user')
app.use('/user', userRoute)

//Start server
app.listen(4000)
