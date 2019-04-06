const listaUfs = [];

const unidadeFederativaClass = require("../models/UnidadeFederativa");

const cadastro = function(request, response){
    response.render("cadastroUF");
}

const lista = function(request, response){
    response.render("listaUf", {"ufs": listaUfs});
}

const listar = function(request, response){
    let uf = new unidadeFederativaClass(request.body.id, request.body.nome, request.body.sigla);
    listaUfs.push(uf);
    response.render("listaUf", {"ufs": listaUfs});

}

const find = function(request, response){
    return listaUfs;
}

module.exports.listar=listar;
module.exports.lista=lista;
module.exports.cadastro=cadastro;
module.exports.find=find;