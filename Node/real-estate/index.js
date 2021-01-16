const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./queries')

const app = express()
app.use(cors())
const port = 8000

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/real-estate', db.getAllRealEstate);
app.post('/real-estate', db.insertRealEstate);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});