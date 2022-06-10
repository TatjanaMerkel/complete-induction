const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DB_URI, () => console.log("Connected to Database!"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4001, () =>  console.log("Server is running!"))