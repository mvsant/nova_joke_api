const express = require('express');
const router = express.Router();
const {
  randomJoke,
  randomTen,
  jokeByType,
} = require("../handler");
const LimitingMiddleware = require('limiting-middleware');


router.use(new LimitingMiddleware().limitByIp());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/', (req, res) => {
  res.send('Try /random_joke, /random_ten, /jokes/random, or /jokes/ten');
});

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.get('/random_joke', (req, res) => {
  res.json(randomJoke());
});

router.get('/random_ten', (req, res) => {
  res.json(randomTen());
});

router.get('/jokes/random', (req, res) => {
  res.json(randomJoke());
});

router.get('/jokes/ten', (req, res) => {
  res.json(randomTen());
});

router.get('/jokes/:type/random', (req, res) => {
  res.json(jokeByType(req.params.type, 1));
});

router.get('/jokes/:type/ten', (req, res) => {
  res.json(jokeByType(req.params.type, 10));
});

router.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

module.exports = router;