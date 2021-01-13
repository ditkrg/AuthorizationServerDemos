const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'real_estate',
  password: 'root',
  port: 5432,
});

const getAllRealEstate = (request, response) => {
    pool.query('SELECT * FROM real_estate ORDER BY id DESC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
};

const insertRealEstate = (request, response) => {
  const { address, area } = request.body

  pool.query('INSERT INTO real_estate (address, area) VALUES ($1, $2)', [address, area], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('done :)')
  })
}

module.exports = {
  getAllRealEstate,
  insertRealEstate
}