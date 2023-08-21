
nome = prompt("Digite seu nome completo:");

qntCaracteres = nome.length;


primeiraLetra = nome.charAt(0);

nomeMaiusculo = nome.toUpperCase();

var qntPalavras = nome.split(' ').filter(function (word) {
    return word.trim() !== '';
  }).length;

corNomeAzul = "<span style='color: blue;'>" + nome + "</span>";
corNomeVermelho = "<span style='color: red;'>" + nome + "</span>";
listaNomesAzuis = "<ul>";
for (i = 0; i < 5; i++) {
    listaNomesAzuis += "<li>" + corNomeAzul + "</li>";
}
listaNomesAzuis += "</ul>";

document.write("<p>O nome tem " + qntCaracteres + " caracteres.</p>");
document.write("<p>A primeira letra do nome é: " + primeiraLetra + ".</p>");
document.write("<p>O nome em letras maiúsculas é: " + nomeMaiusculo + ".</p>");
document.write("<p>A quantidade de palavras no nome é " + qntPalavras + ".</p>");
document.write("<p>O nome em vermelho é: " + corNomeVermelho + ".</p>");
document.write("<p>O nome escrito 5 vezes em azul:</p>");
document.write(listaNomesAzuis);
aaaa