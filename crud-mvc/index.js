const express = require("express");
const bodyParser = require("body-parser");
const hbars = require("express-handlebars");

const server = express();

const cidadeController = require("./controllers/cidadeController");
const ufController = require("./controllers/ufController");
const pessoaController = require("./controllers/pessoaController");

server.engine("handlebars", hbars());

server.set("views", __dirname + "/views"); // especifica onde estao os htmls
server.set("view engine", "handlebars");   // diz que estamos usando Handlebars para template

server.use(bodyParser.urlencoded({extended: true}));

server.get("/", function(request, response){
    response.render("inicio");
});

server.get("/cidade/cadastro", cidadeController.cadastro);
server.get("/cidade/listar", cidadeController.lista);

server.get("/uf/cadastro", ufController.cadastro);
server.get("/uf/listar", ufController.lista);

server.get("/pessoa/cadastro", pessoaController.cadastro);
server.get("/pessoa/listar", pessoaController.lista);

server.post("/cidade/cadastrar", cidadeController.listar);
server.post("/uf/cadastrar", ufController.listar);
server.post("/pessoa/cadastrar", pessoaController.listar);

server.listen(3000);