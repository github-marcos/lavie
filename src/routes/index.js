const express = require("express");
const psicologoController = require('../controllers/psicologoController');
const requestLog = require("../middlewares/requestlog");
const psicologoCreateValidation = require("../../validations/create");
const authLoginValidation = require("../../validations/auth/login");
const authController = require("../controllers/authController");

const routes = express.Router();


routes.get("/psicologos/listar", psicologoController.listarPsicologo);
routes.get("/psicologos/:id/encontrar", psicologoController.encontrarPsicologo);
routes.post("/psicologos/criar", psicologoController.cadastrarPsicologo);
routes.delete("/psicologos/:id/deletar", psicologoController.deletarPsicologo);
routes.put("/psicologos/:id/atualizar", psicologoController.atualizarPsicologo);

routes.post("/psicologos/registrar", psicologoCreateValidation, psicologoController.registrarPsicologo);
routes.post("/psicologos/login", authLoginValidation, authController.login);

module.exports = routes;