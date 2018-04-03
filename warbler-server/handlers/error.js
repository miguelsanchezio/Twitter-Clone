const errorHandler = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    error: {
      message: err.message || 'There was an error.'
    }
  });
}

module.exports = errorHandler;