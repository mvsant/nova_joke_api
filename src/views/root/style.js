const style = `
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Quicksand:wght@400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    color: #fff;
    background-color: #0b0b0b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: lato, sans-serif;
    letter-spacing: 0.0625em;
}

section {
    margin: 3% 0;
    padding: 1% 2% 1% 5%;
    background-color: #222;
    border: 2px solid #777;
    line-height: 1.4;
    max-width: 75ch;
}

ul {
    list-style-type: none;
    margin-left: 2%;
}

li::before {
    content: "→ ";
  }

  a {
      color: skyblue;
      text-decoration: none;
  }

  a:visited{
      color: slateblue;
  }
  `

  module.exports = style
