num = parseInt(prompt('Digite o número de repetições'))
nome = prompt('Digite seu nome completo')

while(num < 0  || num == null || isNaN(num) ){
    num = parseInt(prompt('Digite um número válido de repetições'))
}

for(i = 0 ; i < num ; i++){
    document.write (`<p> ${nome} </p>`)
}
