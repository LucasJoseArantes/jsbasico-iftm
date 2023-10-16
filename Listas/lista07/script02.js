var primeiroNome = localStorage.getItem("primeiroNome");
var ultimoNome = localStorage.getItem("ultimoNome");
document.getElementById("postNome").innerHTML = primeiroNome + " " + ultimoNome;

document.getElementById("btnEntrar").addEventListener("click", function () {
window.location.href = "felino.html";
})