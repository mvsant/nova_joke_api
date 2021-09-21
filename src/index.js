const express = require('express');
const serverless = require('serverless-http');
const router = require('./routes/routes');

// Legacy routes variable below ↓↓↓
// const router = require('./routes/legacy_routes');

const app = express();

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});

app.use('/.netlify/functions/index', router)

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports.handler = serverless(app);
