document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const login = document.getElementById("login").value.trim(); // Remova espaços em branco
        const senha = document.getElementById("senha").value.trim(); // Remova espaços em branco
        const senhaC = document.getElementById("senhaC").value.trim(); // Remova espaços em branco

        // Verifique se login e senha não estão vazios após a remoção dos espaços
        if (login === "") {
            alert("Por favor, digite o login.");
            return;
        }

        if (senha === "") {
            alert("Por favor, digite a senha.");
            return;
        }

        // Segunda validação: Verifica se as senhas são iguais
        if (senha !== senhaC) {
            alert("As senhas não coincidem. Por favor, verifique.");
            document.getElementById("senha").value = "";
            document.getElementById("senhaC").value = "";
            return;
        }

        // Caso todas as validações tenham passado
        alert("Todos os campos foram digitados corretamente.");
        form.reset();
    });

    // Limpar campos ao clicar no botão "Limpar"
    const btnLimpar = document.getElementById("btn-limpar");
    btnLimpar.addEventListener("click", function() {
        document.getElementById("login").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("senhaC").value = "";
    });
});
