const errorHandler = (handler) => async (req, res, next) => {
  try {
    await handler(req, res, next);
  } catch (error) {
    next(error, req, res, next);
  }
};

module.exports = errorHandler;
