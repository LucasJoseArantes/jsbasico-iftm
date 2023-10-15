document.getElementById("gato01").addEventListener("click", function () {
    alert('Oi <USUÁRIO>, tudo bem com você?');
})

var contador = 0;

document.getElementById("gato02").addEventListener("click", function () {
    contador ++;
    document.getElementById("carinhos").innerHTML=contador;
})

var gato03 = document.getElementById("gato03");

gato03.addEventListener("mouseover", function () {
    gato03.src = 'img/gato06.gif';
});

gato03.addEventListener("mouseout", function () {
    gato03.src = 'img/gato03.gif';
});

var gato04 = document.getElementById("gato04");

gato04.addEventListener("mouseover", function () {
    document.getElementById("txtGato4").innerHTML="Ai, pare de fazer cócegas"
});

gato04.addEventListener("mouseout", function () {
    document.getElementById("txtGato4").innerHTML="Lá lá lá lá ";
});

document.getElementById("btnGato05").addEventListener("click", function () {
    var ramNum = Math.floor(Math.random() * 101); 
    document.getElementById("txtGato5").value = ramNum;
})