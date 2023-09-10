var num = prompt("Informe um valor para N:");
while (isNaN(numInt) || numInt <= 0) {
    var num = prompt("Por favor, insira um valor válido para N maior que 0.");
} 
var numInt = parseInt(num);


var ramNum = Math.floor(Math.random() * numInt) + 1;
document.write("<h2>Número Aleatório entre 1 e " + numInt + ": " + ramNum + "</h2>");
    