const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Becoming Devs coding a web app from a smartphone!</h1>')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})