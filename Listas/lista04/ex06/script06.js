
var numeros = [];
alert("Clique em Ok para exibir a Sugestão da Mega Sena ")

for(i = 0; i < 6 ; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 60) + 1; 
    numeros.push(numeroAleatorio);
}

var sugestao = "Sugestão da Mega Sena: " + numeros.join(" - ");
document.write("<p>" + sugestao + "</p>");