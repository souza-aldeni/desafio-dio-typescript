//Solução 

enum Ocupacao {
    Atriz,
    Padeiro 
}

interface Pessoa {
    nome: string;
    idade: number;
    profissao: Ocupacao;
}

var pessoa1 : Pessoa = {nome: 'Maria', idade: 29, profissao: Ocupacao.Atriz};
var pessoa2 : Pessoa = {nome: 'Roberto', idade: 19, profissao: Ocupacao.Padeiro};
var pessoa3 : Pessoa = {nome: 'Laura', idade: 32, profissao: Ocupacao.Atriz};
var pessoa4 : Pessoa = {nome: 'Carlos', idade: 19, profissao: Ocupacao.Padeiro};


