const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  let err = new Error('Not found.');
  err.status = 404;
  next(err);
})

app.use(errorHandler);

// app.get('/', (req, res) => {
//   res.send('Hello world.');
// })

app.listen(PORT, () => {
  console.log(`Server is now running on ${PORT}.`);
})