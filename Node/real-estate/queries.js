const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "real_estate",
  password: "root",
  port: 5432,
});

const getAllRealEstate = (request, response) => {
  pool.query("SELECT * FROM real_estate ORDER BY id DESC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// We don't need the citizen_upn here? ** Temporary **
const insertRealEstate = (request, response) => {
  const { address, area, citizen_upn } = request.body;

  pool.query(
    "INSERT INTO real_estate (address, area, citizen_upn) VALUES ($1, $2, $3)",
    [address, area, citizen_upn],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send("done :)");
    }
  );
};

module.exports = {
  getAllRealEstate,
  insertRealEstate,
};
