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

    let cidade = new cidadeClass(request.body.id || new Date().getTime(), request.body.nome, ufController.buscar(request.body.uf));
    listaCidades.push(cidade);
    console.log(cidade.uf[0].sigla);
    response.render("listaCidade", {"cidades": listaCidades});

}

module.exports.listar=listar;
module.exports.lista=lista;
module.exports.cadastro=cadastro;

module.exports.listaCidades=listaCidades;

module.exports.buscar = (id) =>{
    return listaCidades.filter((u) => {
        return parseInt(u.id) == parseInt(id);
    })
}