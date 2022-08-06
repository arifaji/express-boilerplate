const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

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

if (process.env.ENV === 'dev') {
  logger.debug(`Development mode`);
}

app.listen(port, () => logger.info(`Server running at port ${port}`));
