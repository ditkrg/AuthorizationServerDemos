const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'real_estate',
  password: 'root',
  port: 5432,
});

const getAllRealEstate = (request, response) => {
    pool.query('SELECT * FROM real_estate ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
};

module.exports = {
  getAllRealEstate
}