//Solução 
var Ocupacao;
(function (Ocupacao) {
    Ocupacao[Ocupacao["Atriz"] = 0] = "Atriz";
    Ocupacao[Ocupacao["Padeiro"] = 1] = "Padeiro";
})(Ocupacao || (Ocupacao = {}));
;
;
var pessoa1 = { nome: 'Maria', idade: 29, profissao: Ocupacao.Atriz };
var pessoa2 = { nome: 'Roberto', idade: 19, profissao: Ocupacao.Padeiro };
var pessoa3 = { nome: 'Laura', idade: 32, profissao: Ocupacao.Atriz };
var pessoa4 = { nome: 'Carlos', idade: 19, profissao: Ocupacao.Padeiro };
