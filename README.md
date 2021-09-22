# Nova Joke API

## A new REST API to consume the content of official_joke_api, with new content, new categories and HTML page to show what you can do !

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2846451-233a-4fc4-90a4-adf7d760d1f3/deploy-status)](https://app.netlify.com/sites/sharp-mestorf-1d7507/deploys)

Start Here: [https://sharp-mestorf-1d7507.netlify.app/.netlify/functions/index/api/random](https://sharp-mestorf-1d7507.netlify.app/.netlify/functions/index/api/random)

Or access the homepage at [https://sharp-mestorf-1d7507.netlify.app/.netlify/functions/index/api/](https://sharp-mestorf-1d7507.netlify.app/.netlify/functions/index/api/) to learn more about how to use the content.

# We have legacy !

You can access the standard endpoints of Original Joke api. They are: 
- / - root.
- /ping - returns the word pong.
- /random_joke - returns one random joke.
- /random_ten - returns an array of 10 random jokes.
- /jokes/random - returns one random joke.
- /jokes/ten - returns an array of 10 random jokes.
- /jokes/[type]/random - returns one random joke of that type.
- /jokes/[type]/ten - returns ten random jokes of that type.

# We have news !

You can use new endpoints With three new resources:

- /api - root (HTML file). - NEW
- /api/random - returns one random joke.
- /api/ten - returns an array of 10 random jokes.
- /api/[category name]/random - returns one random joke of that type.
- /api/[category name]/ten - returns ten random jokes of that type.
- /api/joke/[joke number] - returns one joke by your id number. - NEW
- /status - Show how many jokes and categories you have dynamically. - NEW

# We are serverless and hosted on Netlify

If the original source is not working, you can use this repo for free to consume the same data.
Ah...
Original repo: [https://github.com/15Dkatz/official_joke_api](https://github.com/15Dkatz/official_joke_api)

# How to download and deploy

You can clone or download this repo and install the dependencies with your command line tool, then just start the netlify-lambda server or nodemom dev dependency:

```
# Install dependencies
  npm i
# Run at localhost:9000
  npm start
# run at localhost:3005
  npm run dev
```

