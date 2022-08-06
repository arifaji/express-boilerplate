const express = require('express');

const test = require('./test-route');

module.exports = (app) => {
  app.use(express.json());
  app.get('/', (req, res) => {
    res.json({ message: 'Server is up...' });
  });
  // Insert your routes bellow
  app.use('/api', test);
};
