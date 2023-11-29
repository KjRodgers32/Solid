const { Pool } = require("pg");

const pool = new Pool({
	user: "kj",
	host: "localhost",
	port: 5432,
	database: "solid",
});

module.exports = {
	query: (text, params) => pool.query(text, params),
};
