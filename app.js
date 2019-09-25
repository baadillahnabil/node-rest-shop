const morgan = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const ProductRoutes = require('./api/routes/products')
const OrderRoutes = require('./api/routes/orders')

// Apply plugins middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Prevent CORS error
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    return res.status(204).json({})
  }

  next()
})

// Routing
app.use('/products', ProductRoutes)
app.use('/orders', OrderRoutes)

// Handle errors
app.use((req, res, next) => {
  const error = new Error('Not Found!')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  })
})

module.exports = app
