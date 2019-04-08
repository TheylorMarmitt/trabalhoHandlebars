
class UnidadeFederativa{
    constructor(id, nome, sigla){
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
    }
    nomeComSigla() {
        return nome + " - " + sigla;
    }

}
module.exports=UnidadeFederativa;