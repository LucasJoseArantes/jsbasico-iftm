nome = prompt('Digite seu nome completo: ', )
idade = prompt('Digite sua idade: ')

// idade == null (testa se o btn cancelar foi selecionado)
while ((idade == "") || (idade == null) || (isNaN(idade)) || (idade<0)){
    alert("Favor informar a idade!")
    idade = prompt('Digite sua idade: ')
}

if(idade < 18){
    alert(`${nome}, você ainda NAO POSSUI idade para tirar carteira, ainda falta(m) ${18-idade} anos`)
}
else{
    alert(`${nome}, você já POSSUI idade para tirar carteira`)
}

// for(i = idade; i < 25; i++){
//     alert(`Clique para somar de 1 em 1: ${i}`)
// }