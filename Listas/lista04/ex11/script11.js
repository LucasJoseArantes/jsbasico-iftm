var vetorNumeros = [];
var valoresGerados = [];
var imagens = []; // Array de imagens

// Preencha a array de imagens com os nomes das imagens que você tem
for (i = 1; i <= 27; i++) {
    imagens.push(`carta${i}.png`);
}

for (i = 1; i <= 27; i++) {
    var ramNum;

    do {
        ramNum = Math.floor(Math.random() * 27) + 1;
    } while (valoresGerados.includes(ramNum));

    valoresGerados.push(ramNum);
}

document.write(`<h1>Jogue Truco</h1>
    <h2>Cartas Sorteadas </h2>

    <div class="container">
        <div class="jogador1">
            <h3>Cartas do Jogador 1</h3>
            <div>
`)

for (i = 1; i <= 3; i++) {
    var index = valoresGerados[i - 1] - 1; // Ajuste o índice para corresponder ao valor gerado
    var imagem = imagens[index]; // Obtenha o nome da imagem com base no índice
    document.write(`
        <img src="/Listas/lista04/cartas/${imagem}" alt="">
    `)
}

document.write(`
        </div>
    </div>

    <div class="jogador2">
        <h3>Cartas do Jogador 2</h3>
        <div>
    `)

for (i = 4; i <= 6; i++) {
    var index = valoresGerados[i - 1] - 1; // Ajuste o índice para corresponder ao valor gerado
    var imagem = imagens[index]; // Obtenha o nome da imagem com base no índice
    document.write(`
        <img src="/Listas/lista04/cartas/${imagem}" alt="">
    `)
}

document.write(`
        </div>
    </div>
</div>
`)
