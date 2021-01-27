
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')

const server = express()

// Middleware
server.use(bodyParser.json())
server.use(cors({ credentials: true }))
server.use(authMiddleware.initialize)

// Routes
server.use([require('./routes/auth'), require('./routes/rooms')])

// Error handling
server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  })
})

// Read port and host from the configuration file
server.listen(3000, error => {
  if (error) {
    console.error('Error starting', error)
  } else {
    console.info('Express listening on port 3000')
  }
})
