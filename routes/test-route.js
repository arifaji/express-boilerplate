const express = require('express');
const errorHandler = require('../middleware/error-handler-route');
const TestController = require('../controllers/test-controller');

const router = express.Router();

router.get('/test/:id', errorHandler(TestController.getTestById));
router.post('/test', (req, res) => {
  res.json({ msg: 'test post...' });
});

module.exports = router;
