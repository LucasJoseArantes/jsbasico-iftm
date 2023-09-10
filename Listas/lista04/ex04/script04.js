var ramNum = Math.floor(Math.random() * (numIntM - numIntN + 1)) + numIntN;
var n = prompt("Informe um valor para N:");
var m = prompt("Informe um valor para M:");

while (isNaN(n) || n <= 0 || isNaN(m) || m <= 0) {
    alert("Por favor, insira valores válidos para N e M maiores que 0.");
    n = prompt("Informe um valor para N:");
    m = prompt("Informe um valor para M:");
} 

var numIntN = parseInt(n);
var numIntM = parseInt(m);

var ramNum = Math.floor(Math.random() * (numIntM - numIntN + 1)) + numIntN;
document.write("<h2>Número Aleatório entre " + numIntN + " e " + numIntM + ": " + ramNum + "</h2>");
