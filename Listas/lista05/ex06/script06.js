valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");
resultado = document.getElementById("txtResultado");
btnSoma = document.getElementById("btnSoma");
btnSubtracao = document.getElementById("btnSubtracao");
btnMultiplicacao = document.getElementById("btnMultiplicacao");
btnDivisao = document.getElementById("btnDivisao");

btnSoma.addEventListener("click", function (event) {exibirResultado('+', event)});
btnSubtracao.addEventListener("click", function (event) {exibirResultado('-', event)});
btnMultiplicacao.addEventListener("click", function (event) {exibirResultado('*', event)});
btnDivisao.addEventListener("click", function (event) {exibirResultado('/', event)});

function exibirResultado(operador, event) {
    event.preventDefault();
    resultado.value = eval(valor1.value + operador + valor2.value);
}