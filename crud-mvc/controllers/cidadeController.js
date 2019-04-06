const listaCidades = [];

const cidadeClass = require("../models/Cidade");
const ufController = require("./ufController");

const cadastro = function(request, response){
    response.render("cadastroCidade", {"ufs": ufController.find});
    response.render("cadastroCidade");
}

const lista = function(request, response){
    response.render("listaCidade", {"cidades": listaCidades});
}

const listar = function(request, response){

    let cidade = new cidadeClass.cidade(request.body.id, request.body.nome, request.body.uf);
    listaCidades.push(cidade);
    response.render("listaCidade", {"cidades": listaCidades});

}


module.exports.listar=listar;
module.exports.lista=lista;
module.exports.cadastro=cadastro;

