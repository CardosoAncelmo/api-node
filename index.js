const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({ extended: false }))


userRoute(app)

app.get('/', ( req, res) => res.send('olá mundo pelo express!'))

app.listen(port, () => console.log('Menssagem de teste!!'))