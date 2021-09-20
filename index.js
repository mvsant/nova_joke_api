const express = require('express');
//const { randomJoke, randomTen, jokeByType } = require('./handler');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(require('./routes/routes'));

// LEGACY ROUTES (Must be activated below ↓ and deactivate the command above ↑)
// app.use(require('./routes/legacy_routes'));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
