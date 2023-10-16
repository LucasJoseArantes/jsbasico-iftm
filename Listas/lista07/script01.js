var primeiroNome = "";
var ultimoNome = "";

document.getElementById("btnEntrar").addEventListener("click", function () {
    var inputNome = document.getElementById("inputNome").value.trim();;
    var palavras = inputNome.split(" ");

    primeiroNome = palavras[0].trim();
    ultimoNome = palavras[palavras.length - 1]


    if (palavras.length >= 2 && inputNome.trim() !== "") {
        window.location.href = "menu.html";
        localStorage.setItem("primeiroNome",primeiroNome);
        localStorage.setItem("ultimoNome",ultimoNome);
    } else {
        alert("Por favor, insira pelo menos duas palavras no campo de nome.");
    }
});

document.getElementById("postNome").innerHTML= `${primeiroNome} ${ultimoNome}`;

