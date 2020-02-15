const express = require("express");
const moods = require("./jsons/moods.json")
const causes = ("./jsons/causes.json")

const app = express();
const port_number = 8000;

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_, res) => res.send('Cocoa Desktop Mock Server'));

app.get('/moods', (_, res) => {
  res.status(200).json(moods);
});

app.get('/causes', (_, res) => {
  res.status(200).json(causes);
});

app.listen(port_number, () => console.log(`listening on Port ${port_number}`))
