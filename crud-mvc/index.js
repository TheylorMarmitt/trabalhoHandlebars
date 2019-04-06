const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const server = express();

const cidadeController = require("./controllers/cidadeController");
const ufController = require("./controllers/ufController");

server.set("views", __dirname + "/views"); // especifica onde estao os htmls
server.set("view engine", "ejs");   // diz que estamos usando EJS para template

server.use(bodyParser.urlencoded({extended: true}));

server.get("/", function(request, response){
    response.render("cadastroUF");
});

server.get("/cidade/cadastro", cidadeController.cadastro);
server.get("/uf/cadastro", ufController.cadastro);
server.get("/cidade/listar", ufController.lista);
server.get("/uf/listar", cidadeController.lista);

server.post("/cidade/cadastrar", cidadeController.listar);
server.post("/uf/cadastrar", ufController.listar);

server.listen(3000);