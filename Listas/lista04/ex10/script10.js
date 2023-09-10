var ramNum = Math.floor(Math.random() * 27) + 1;

document.write(`
    <div class="container">
            <div>
                <h1>Sorteio de Cartas</h1>
            </div>

            <div class="carta-sorteada">
                <h2>Sua carta sorteada é: </h2>
                <img src="/Listas/lista04/cartas/carta${ramNum}.png" alt="">
            </div>
        </div>
`)