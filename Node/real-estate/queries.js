const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "real_estate",
  password: "root",
  port: 5432,
});

const getAllRealEstate = (request, response) => {
  // The express-jwt middleware decodes the jwt token and store all claims on request.user
  // https://github.com/auth0/express-jwt/issues/153#issuecomment-269498310
  citizen_upn = request.user.sub;
  pool.query(`SELECT * FROM real_estate WHERE citizen_upn = '${citizen_upn}' ORDER BY id DESC`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const insertRealEstate = (request, response) => {
  const { address, area } = request.body;
  citizen_upn = request.user.sub;
  console.log(citizen_upn)
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
