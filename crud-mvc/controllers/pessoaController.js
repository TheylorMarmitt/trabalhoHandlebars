const listaPessoas = [];

const pessoaClass = require("../models/Pessoa");
const cidadeController = require("./cidadeController");

const cadastro = function(request, response){
    response.render("cadastroPessoa", {"cidades": cidadeController.listaCidades});
}

const lista = function(request, response){
    response.render("listaPessoa", {"pessoas": listaPessoas});
}

const listar = function(request, response){

    let pessoa = new pessoaClass(request.body.id || new Date().getTime(), request.body.nome, request.body.sobrenome, cidadeController.buscar(request.body.cidade));
    listaPessoas.push(pessoa);
    response.render("listaPessoa", {"pessoas": listaPessoas});

}


module.exports.listar=listar;
module.exports.lista=lista;
module.exports.cadastro=cadastro;