const express = require("express");
const router = express.Router();
const {
  totalJokes,
  categories,
  getJoke,
  randomJoke,
  randomTen,
  jokeByType,
} = require("../handler");
const LimitingMiddleware = require("limiting-middleware");
const rootView = require("../views/root/root.js");

router.use(new LimitingMiddleware().limitByIp());

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// NEW ROUTES

router.get("/api", (req, res) => {
  res.send(rootView);
});

router.get("/api", (req, res) => {
  res.send(rootView);
});

router.get("/api/random", (req, res) => {
  res.json(randomJoke());
});

router.get("/api/joke/:number", (req, res) => {
  res.json(getJoke(req.params.number, 1));
});

router.get("/api/ten", (req, res) => {
  res.json(randomTen());
});

router.get("/api/:type/random", (req, res) => {
  res.json(jokeByType(req.params.type, 1));
});

router.get("/api/:type/ten", (req, res) => {
  res.json(jokeByType(req.params.type, 10));
});

router.get("/status", (req, res) => {
  res.json({
    status: "200 Ok",
    message: `This api have ${totalJokes} Jokes and ${
      categories().quantity
    } categories: ${categories().names}`,
  });
});

// LEGACY ROUTES

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
