const config = require('./utils/config')
const express = require('express')
require('express-async-errors');
const app = express()
const path = require("path");

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose');

const transactionsRouter = require('./controllers/transactions')
const contractEventsRouter = require('./controllers/contractEvent')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/transactions', transactionsRouter)
app.use('/contractEvents', contractEventsRouter)

app.use(middleware.errorHandler)

module.exports = app