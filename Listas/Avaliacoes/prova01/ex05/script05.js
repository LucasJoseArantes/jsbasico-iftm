function gerarNumeroRam(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const valor = Math.floor(Math.random() * (max - min + 1)) + min;
    return valor;
  }  

const candidato1 = gerarNumeroRam(1,4);
const candidato2 = gerarNumeroRam(1,4);
const percentuais = [0, 0];


while(candidato2 == candidato1){
    candidato2 = gerarNumeroRam(1,4);
}

function infoCandidatos(candidato) {
    const imagem = document.createElement("img");
    const candidatoInfo = {
        imagem: document.createElement("img"),
        nome: "",
        partido: "",
        percentual: 0,
    };

    switch (candidato) {
        case 1:
            candidatoInfo.imagem.src = "/img/candidato1.png";
            candidatoInfo.nome = "Jair Messias Bolsonaro";
            candidatoInfo.partido = "Partido (PL)";
            candidatoInfo.percentual = obterPercentual();
            break;
        case 2:
            candidatoInfo.imagem.src = "/img/candidato2.png";
            candidatoInfo.nome = "Luiz Inácio Lula da Silva";
            candidatoInfo.partido = "Partido (PT)";
            candidatoInfo.percentual = obterPercentual();
            break;
        case 3:
            candidatoInfo.imagem.src = "/img/candidato3.png";
            candidatoInfo.nome = "Ciro Gomes";
            candidatoInfo.partido = "Partido (PDT)";
            candidatoInfo.percentual = obterPercentual();
            break;
        case 4:
            candidatoInfo.imagem.src = "/img/candidato4.png";
            candidatoInfo.nome = "Simone Tebet";
            candidatoInfo.partido = "Partido (MDB)";
            candidatoInfo.percentual = obterPercentual();
            break;
    }
    document.body.appendChild(candidatoInfo.imagem);
    document.write("<p>" + candidatoInfo.nome + "</p>");
    document.write("<p>" + candidatoInfo.partido + "</p>");
    document.write("<p> Percentual: " + candidatoInfo.percentual.toFixed(1) + "%</p>");
    return candidatoInfo;
}

function obterPercentual(){
    var perc = 0;
    if(percentuais[0] == 0){
        percentuais[0] = Math.random() * 100;
        perc = percentuais[0];
    } else {
        perc = 100 - percentuais[0];
        percentuais[1] = perc;
    }
    return perc;
}

function valida(val1,val2){
    if(val1 < val2){
        return 100 - val2;
    } else{
        return 100 - val1;
    }
}

const candidato1Info = infoCandidatos(candidato1);
const candidato2Info = infoCandidatos(candidato2);

if (candidato1Info.percentual > candidato2Info.percentual) {
    document.write("<h2>Candidato(a) vencedor(a): " + candidato1Info.nome + " (" + candidato1Info.percentual.toFixed(1) + "%)</h2>");
} else {
    document.write("<h2>Candidato(a) vencedor(a): " + candidato2Info.nome + " (" + candidato2Info.percentual.toFixed(1) + "%)</h2>");
}