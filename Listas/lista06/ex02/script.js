const candidatos = document.querySelectorAll(".candidato");
const contadorVotos = document.querySelectorAll("span");

candidatos.forEach((candidato, index) => {
    let votes = 0;

    candidato.addEventListener("click", () => {
        votes++;
        contadorVotos[index].textContent = votes;

        // Remove a classe "ganhando" de todos os candidatos
        candidatos.forEach((c) => c.classList.remove("ganhando"));

        // Encontra o candidato com o maior número de votos
        const maxVotes = Math.max(...Array.from(contadorVotos).map((el) => parseInt(el.textContent)));

        // Adiciona a classe "ganhando" ao(s) candidato(s) com o maior número de votos
        candidatos.forEach((c, idx) => {
            if (parseInt(contadorVotos[idx].textContent) === maxVotes) {
                c.classList.add("ganhando");
            }
        });
    });
});