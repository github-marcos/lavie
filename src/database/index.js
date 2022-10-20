const Sequelize = require("sequelize");

const DB_NAME = "mydb";
const DB_USER = "root";
const DB_PASS = "renato.lp78";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

// objeto para guardar a conexão do banco dados
let database = {};

try {
  database = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.log(error);
  console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConection() {
  try {
    await database.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.log(error);
    console.error("Erro ao tentar se conectar ao banco de dados");
  }
}

Object.assign(database, {
  hasConection,
});

module.exports = database;