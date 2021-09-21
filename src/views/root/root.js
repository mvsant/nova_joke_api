const style = require("./style");

const message = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
   ${style}
   </style>
    <title>Joke API</title>
</head>
<body>
    <h1>Welcome to Nova Joke API !!!</h1>
    <h2>Based on original joke api</h2>
    <main>
        <section>
            <p>Our new endpoints are:</p>
            <ul>
                <li>/api</li>
                <li>/api/random</li>
                <li>/api/ten</li>
                <li>/api/[category name]/random</li>
                <li>/api/[category name]/ten</li>
                <li>/api/joke/[joke number]</li>
                <li>/status</li>
            </ul>
        </section>
        <section>
        <p><b>NOTE:</b> Legacy routes have your own endpoints listed below ↓:  </p>
        <ul>
            <li>/ - root</li>
            <li>/ping - returns the word pong</li>
            <li>/random_joke - returns one random joke</li>
            <li>/random_ten - returns an array of 10 random jokes</li>
            <li>/jokes/random - returns one random joke</li>
            <li>/jokes/ten - returns an array of 10 random jokes</li>
            <li>/jokes/[type]/random - returns one random joke of that type</li>
            <li>/jokes/[type]/ten - returns ten random jokes of that type </li>
    
        </ul>
    </section>
    <section>     
       <p>Our current available categories are:</p>
        <ul>
            <li>general</li>
            <li>knock-knock</li>
            <li>programming</li>
        </ul>
    </section>
    <section>
        <p>You have this page as root at endpoint: /api .</p>
        <p>You can programmatically check all jokes and categories at /status endpoint.</p>
        <p>You can access legacy routes (original Joke Api) normally. That means you can use the same structure built previously on your application. </p>
    </section>

    <section>
        <p><b><i>Disclaimer:</i></b> This project is directly "inspired" on "Original Joke API" but claims easier usability.</p>
        <p>Feel free to contact-me if you have any issue or message related with this project.</p>
        <p>Original joke api repo: <a href="https://github.com/15Dkatz/official_joke_api">https://github.com/15Dkatz/official_joke_api</a></p>
        <p>Nova joke api repo: <a href="https://github.com/marlonveiga-santos/nova_joke_api">https://github.com/marlonveiga-santos/nova_joke_api</a></p>
    </section>
</main>
</body>
</html>
`;

module.exports = message;
