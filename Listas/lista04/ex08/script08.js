var opcoes = ["Pedra", "Papel", "Tesoura"];

        var escolhaJogador1 = opcoes[Math.floor(Math.random() * opcoes.length)];
        var escolhaJogador2 = opcoes[Math.floor(Math.random() * opcoes.length)];
        

        var resultado = "";
        if (escolhaJogador1 === escolhaJogador2) {
            resultado = "Empate!";
        } else if (
            (escolhaJogador1 === "Pedra" && escolhaJogador2 === "Tesoura") ||
            (escolhaJogador1 === "Papel" && escolhaJogador2 === "Pedra") ||
            (escolhaJogador1 === "Tesoura" && escolhaJogador2 === "Papel")
        ) {
            resultado = "JOGADOR 1 é o vencedor!";
        } else {
            resultado = "JOGADOR 2 é o vencedor!";
        }

            document.write(`
                <div class="container">
                    <div class="player">
                        <img src="img/${escolhaJogador1}.jpeg">
                        <p class="player-label">Escolha do Jogador 1</p>
                    </div>
                    <div class="player">
                        <img src="img/${escolhaJogador2}.jpeg">
                        <p class="player-label">Escolha do Jogador 2</p>
                    </div>
                    <h1 class="result-label">${resultado}</h1>
                </div>
            `);