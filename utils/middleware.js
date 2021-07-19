const logger = require('./logger')

const requestLogger = (request, response, next) => {
  if(request.path.length > 1){
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
  }
  next()
}


const unknownEndpoint = (request, response) => {
response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {

  if (!error.statusCode) error.statusCode = 500;

  return response
    .status(error.statusCode)
    .json({ error: error.toString(), customMessage: error.customMessage , message: error.message, data: error.data });
}

module.exports = {
  requestLogger,
  errorHandler
}