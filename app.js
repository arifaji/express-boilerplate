const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('./util/logger');
const {
  errorLogger,
  errorResponder,
  invalidPathHandler,
} = require('./middleware/error-middleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ credentials: true, origin: '*' }));
app.use(cookieParser());
app.use(express.json());
app.use(require('morgan')('tiny', { stream: logger.stream }));

require('./routes')(app);

app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

app.listen(port, () => logger.info(`Server running at port ${port}`));
