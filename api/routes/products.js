const express = require('express')
const router = express.Router()

// Get all the products
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products'
  })
})

// Add product
router.post('/', (req, res, next) => {
  // Get the data from payload
  const product = {
    name: req.body.name,
    price: req.body.price
  }

  res.status(201).json({
    message: 'Handling POST requests to /products',
    product
  })
})

// Get single product
router.get('/:id', (req, res, next) => {
  const id = req.params.id

  let message = ''
  if (id === 'special') message = 'You discovered the special ID'
  else message = 'You passed an ID'

  res.status(200).json({
    message,
    id
  })
})

// Update product
router.patch('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product!'
  })
})

// Delete product
router.delete('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product!'
  })
})

module.exports = router
