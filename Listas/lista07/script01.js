var primeiroNome = "";
var ultimoNome = "";

document.getElementById("btnEntrar").addEventListener("click", function () {
    var inputNome = document.getElementById("inputNome").value;
    var palavras = inputNome.split(" ");

    primeiroNome = palavras[0];
    ultimoNome = palavras[palavras.length - 1];

    if (palavras.length >= 2 && inputNome.trim() !== "") {
        window.location.href = "menu.html";
    } else {
        alert("Por favor, insira pelo menos duas palavras no campo de nome.");
    }
});

document.getElementById("postNome").innerHTML= `${primeiroNome} ${ultimoNome}`;

