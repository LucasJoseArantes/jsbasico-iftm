face = document.getElementById("personagem");
paragrafo = document.getElementById("mensagem")

face.src = "img/alegre.png";
paragrafo.innerHTML = "zzzzzzzzz"

// PARA CHAMAR UMA FUNÇÃO SEM PASSAGEM DE PARAMETRO, NÃO COLOCAMOS  () 
// PARA CHAMAR UMA FUNÇÃO COM PASSAGEM DE PARAMETRO COLOCAMOS function() PARA O JS ENTENDER QUE A FUNÇÃO A SEGUIR NÃO DEVE SER EXECUTADA DE IMEDIATO

face.addEventListener("mouseover", function () {
    trocarPersonagem('assustado', 'O que você quer??')
});

face.addEventListener("mouseleave", function () {
    trocarPersonagem('pensativo', 'ZzzzZZzz')
});

face.addEventListener("click", function () {
    pedirNome()
});

function trocarPersonagem(tipo, mensagem) {
    face.src = `img/${tipo}.png`
    paragrafo.innerHTML = `${mensagem}`;
    personagem.classList.remove("imgAlegre");
}

function pedirNome() {
    nome = prompt('Qual é o seu nome?')
    if (nome == null || nome == "") {
        trocarPersonagem('nervoso', 'Não me faça perder meu tempo')
    } else {
        trocarPersonagem('alegre', `${nome} seja bem vindo!`)
        personagem.classList.add("imgAlegre");

    }
}


// function personagemAssutado(){
//     face.src = "img/assustado.png";
//     paragrafo.innerHTML = "O que você quer???"
// }
// function personagemPensativo(){
//     face.src = "img/pensativo.png";
//     paragrafo.innerHTML = "ZZZZZZZ"
// }