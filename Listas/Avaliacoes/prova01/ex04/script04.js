texto = prompt("Digite um texto");
opcao = prompt("Qual a configuração deseja o texto: 1) Itálico, 2) Negrito ou 3) Sublinhado")

opcao = parseInt(opcao)

switch (opcao) {
    case 1:
      textoConfigurado = `<i> ${texto} </i>`
      break;
  
    case 2:
        textoConfigurado = `<b> ${texto} </b>`
      break;
  
    case 3:
        textoConfigurado = `<u> ${texto} </u>`
      break;
  
    default:
      alert("Opção não reconhecida");
      break;
  }

document.write(`<p> ${textoConfigurado} </p>`)