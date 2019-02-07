const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const alias = require('module-alias/register')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// register routes
app.use('/', require('@routes/web'))

app.listen(port, () => console.log(`Server Running on PORT ${port}`))