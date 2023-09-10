var passageiros = [];
var idades = [];

var qnt = prompt("Digite a quantidade de passageiros que irão pegar o ônibus ")

alert("Digite o nome e a idade dos passageiros que irão pegar o ônibus")

    for(i=0 ; i < qnt; i++ ){
        passageiros[i] = prompt("Nome do passageiro " + (i+1))
        idades[i] = parseInt(prompt("Idade de " + passageiros[i]))
    }

var soma = 0;
    for (i = 0; i < idades.length; i++) {
        soma += idades[i];
    }

var mediaIdades = soma / idades.length;
var ramNum = Math.round(Math.random() * qnt);   

document.write(`
    <h1> Excursão para o Google </h1>
    <p> A média de idade é: ${mediaIdades} </p>
    <p> O viajante sorteado é: ${passageiros[ramNum]} </p>
`)

