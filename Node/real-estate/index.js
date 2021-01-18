const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./queries')
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express()
app.use(cors())
const port = 8000

app.use(jwt({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `http://localhost:10000/.well-known/openid-configuration/jwks`
  }),

  // Validate the audience and the issuer.
  audience: 'real-estate-api',
  issuer: 'http://localhost:10000',
  algorithms: [ 'RS256' ]
}));

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