var qnt = parseInt(prompt("Qual a quantidade de participantes"));
var vetorMembros = [];
var vetorNumeros = [];
var valoresGerados = [];

document.write(`
    <table>
        <tr>
            <th> Ordem </th>
            <th> Participante </th>
        </tr>
`)

for (i = 0; i < qnt; i++) {
    var aluno = prompt("Digite o nome do membro do grupo");
    vetorMembros.push(aluno);
}

for (i = 1; i <= qnt; i++) {
    var ramNum;

    do {
        ramNum = Math.floor(Math.random() * qnt);
    } while (valoresGerados.includes(ramNum));

    valoresGerados.push(ramNum);

    document.write(`
      <tr>
          <td>${i}º</td>
          <td>${vetorMembros[ramNum]}</td>
      </tr>
    `);
}

document.write("</table>")
