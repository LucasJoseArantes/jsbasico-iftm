valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");
btn = document.getElementById("btn");

btn.addEventListener("click",exibirResultado);

function exibirResultado(event) {
    event.preventDefault();
    if (!valor1.value.trim() || !valor2.value.trim()) 
        alert("Informe ambos os  valores!");
    else {
        var resultado = parseFloat(valor1.value) + parseFloat(valor2.value);
        if (resultado >= 60) alert("Aprovado");
        else alert(`Reprovado. Faltaram ${60-resultado} pontos para ser aprovado!`);
    }
}