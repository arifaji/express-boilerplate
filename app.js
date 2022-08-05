const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('./util/logger');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ credentials: true, origin: '*' }));
app.use(cookieParser());
app.use(express.json());
app.use(require('morgan')('tiny', { stream: logger.stream }));

app.use('/', (req, res) => {
  res.json({ status: 'ok', msg: 'oke' });
});

app.listen(port, () => logger.info(`Server running at port ${port}`));
