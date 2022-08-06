const logger = require('../util/logger');

// Error handling Middleware function for logging the error message
const errorLogger = (error, request, response, next) => {
  const level = error.status ? 'debug' : 'error';
  logger[level](`error ${error.message}`);
  next(error, request, response); // calling next middleware
};

// Error handling Middleware function reads the error message
// and sends back a response in JSON format
const errorResponder = (error, request, response, next) => {
  if (!error) next(request, response);
  const status = error.status || 503;
  response.status(status).json({
    success: false,
    message: error.message,
  });
};

// Fallback Middleware function for returning
// 404 error for undefined paths
const invalidPathHandler = (request, response) => {
  response.status(404);
  response.send({ message: 'invalid path' });
};

module.exports = {
  errorLogger,
  errorResponder,
  invalidPathHandler,
};
