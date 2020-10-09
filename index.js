const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const config = require('config')
const morgan = require('morgan')
const colors = require('colors')

const app = express()
const PORT = config.get('PORT')
const NODE_ENV = config.get('NODE_ENV')

app.use(express.json({extended: true}))
app.use(cors())
app.use(helmet())
app.use(morgan())

app.get('*', (req, res) => res.send('Hello'))

app.listen(
  PORT,
  console.log(`App has been started on ${PORT} in ${NODE_ENV} mode`)
)
