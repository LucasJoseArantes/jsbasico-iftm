var num = parseInt(prompt("Informe um valor para N:"));

while (isNaN(num) || num <= 0) {
    var num = prompt("Por favor, insira um valor válido para N maior que 0.");
}

var ramNum = Math.floor(Math.random() * num) + 1;
document.write("<h2>Número Aleatório entre 1 e " + num + ": " + ramNum + "</h2>");
    