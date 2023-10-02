textoOriginal = "Jesus te ama Jesus é muito bom"


document.write(`<h1> ${textoOriginal.slice(0,5)} </h1>`) //Exibe apenas os caracteres de 0 a 5

document.write(`<h1> ${textoOriginal.slice(0,5).toUpperCase()} </h1>` ) //Exibe apenas os caracteres de 0 a 5 em MAIUSCULO

document.write(`<h1> ${textoOriginal.substr(9,3)} </h1>` ) //Exibe os caracteres de 9 até 3 para frente

document.write(`<h1> ${textoOriginal.replace("Jesus", "Deus")} </h1>` ) //Substitui o primeiro Jesus por Deus

document.write(`<h1> ${textoOriginal.replaceAll("Jesus", "Deus")} </h1>` ) //Substitui todos Jesus por Deus

document.write(`<h1> Quantidade de caracteres: ${textoOriginal.length} </h1>` ) //Exibe os caracteres 

novoTexto = textoOriginal.split(" ")
document.write(`<h1>Quantidade de palavras: ${novoTexto.length} </h1>` ) //Exibe a quantidade de palavras, usando o espaço como separador
