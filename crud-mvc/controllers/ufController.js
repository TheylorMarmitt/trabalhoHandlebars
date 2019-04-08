const listaUfs = [];

const unidadeFederativaClass = require("../models/UnidadeFederativa");

const cadastro = function(request, response){
    response.render("cadastroUF");
}

const lista = function(request, response){
    response.render("listaUf", {"ufs": listaUfs});
}

const listar = function(request, response){
    let uf = new unidadeFederativaClass(request.body.id || new Date().getTime(), request.body.nome, request.body.sigla);
    listaUfs.push(uf);
    response.render("listaUf", {"ufs": listaUfs});

}


module.exports.listar=listar;
module.exports.lista=lista;
module.exports.cadastro=cadastro;

module.exports.listaUfs=listaUfs;

module.exports.buscar = (id) =>{
    return listaUfs.filter((u) => {
        return parseInt(u.id) == parseInt(id);
    })
}