var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = "0";
function somarAoSaldo() {
    campoSaldo.innerHTML = String(Number(campoSaldo.innerHTML) + Number(soma.value));
    soma.value = '';
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
    soma.value = '';
}
botaoAtualizar.addEventListener('click', somarAoSaldo);
botaoLimpar.addEventListener('click', limparSaldo);
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
