let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = "0"

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