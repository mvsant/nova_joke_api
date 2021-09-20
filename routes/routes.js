var express = require('express');
var router = express.Router();
path = require('path');
const { getJoke, randomJoke, randomTen, jokeByType } = require('../handler');
const LimitingMiddleware = require('limiting-middleware');


router.use(new LimitingMiddleware().limitByIp());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname , '../public/pages/root/index.html'));
  });

router.get('/api', (req, res) => {
    res.send('Try /random_joke, /random_ten, /jokes/random, or /jokes/ten');
  });

router.get('/api/random', (req, res) => {
    res.json(randomJoke());
  });

  router.get('/api/joke/:number', (req, res) => {
    res.json(getJoke(req.params.number, 1));
  });

router.get('/api/ten', (req, res) => {
  res.json(randomTen());
});

router.get('/api/:type/random', (req, res) => {
  res.json(jokeByType(req.params.type, 1));
});

router.get('/api/:type/ten', (req, res) => {
  res.json(jokeByType(req.params.type, 10));
});

router.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});

module.exports = router;