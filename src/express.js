const express = require("express");
const routes = require("./routes");
const handleError = require("./middlewares/handleError");

const database = require("./database");

const server = express();

database.hasConection();

server.use(express.json());

server.use(routes);

server.use(handleError);

server.listen(8000); 