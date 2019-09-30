const express = require('express')
const router = express.Router()

// Get all orders
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  })
})

// Create order
router.post('/', (req, res, next) => {
  // Get the data from payload
  const order = {
    product_id: req.body.product_id,
    quantity: req.body.quantity
  }

  res.status(201).json({
    message: 'Order created',
    order: order
  })
})

// Get single order
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  res.status(200).json({
    message: 'Order details',
    id: id
  })
})

// Delete order
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  res.status(200).json({
    message: 'Order deleted',
    id: id
  })
})

module.exports = router
