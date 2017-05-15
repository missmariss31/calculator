const express = require('express');
const add = require('./routes/add');

// Insitailize express
const app = express();

// Create the static file server
app.use('/', express.static('../client', { maxAge: '365d' }));

// Create the server routes
app.use('/add', add);

// Create and run the server.
const server = app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log(`Calculator server listening on http://localhost:8080`);
});

// handle OS SIGTERM signal
process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});
