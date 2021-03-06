const jokes = require('./jokes/index.json');

const getJoke = number => {
return jokes[number - 1]
}

const randomJoke = () => {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

/**
 * Get N random jokes from a jokeArray
 */
const randomN = (jokeArray, n) => {
  const limit = jokeArray.length < n ? jokeArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * jokeArray.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return jokeArray[randomIndex];
  });
};

const randomTen = () => randomN(jokes, 10);

const jokeByType = (type, n) => {
  return randomN(jokes.filter(joke => joke.type === type), n);
};

const totalJokes = jokes.length;

const categories = () => {
  const types =  jokes.map(item => item.type)
  const uniqueTypes = [...new Set(types)]
  const names = uniqueTypes.join(', ')
  const quantity = uniqueTypes.length
  return {names, quantity}
}

module.exports = { totalJokes, categories, getJoke, randomJoke, randomN, randomTen, jokeByType };
