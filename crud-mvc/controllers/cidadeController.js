const listaCidades = [];

const cidadeClass = require("../models/Cidade");
const ufClass = require("../models/UnidadeFederativa");
const ufController = require("./ufController");

const cadastro = function(request, response){
    response.render("cadastroCidade", {"ufs": ufController.listaUfs});
}

const lista = function(request, response){
    response.render("listaCidade", {"cidades": listaCidades});
}

const listar = function(request, response){

    let cidade = new cidadeClass(request.body.id, request.body.nome, ufController.buscar(request.body.uf));
    listaCidades.push(cidade);
    console.log(cidade);
    response.render("listaCidade", {"cidades": listaCidades});

}

module.exports.listar=listar;
module.exports.lista=lista;
module.exports.cadastro=cadastro;

module.exports.listaCidades=listaCidades;
