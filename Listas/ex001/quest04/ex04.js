nota1 = parseFloat(prompt('Informe a nota do primeiro bimestre: '))
nota2 = parseFloat (prompt('Informe a nota do segundo bimestre: '))

// parse é utilizado  para converter o tipo de entrada
notaFinal = nota1 + nota2

while(notaFinal == "" || notaFinal < 0 || notaFinal == null|| isNaN(notaFinal) || notaFinal > 100){
    alert('Digita um valor válido')
    nota1 = parseFloat(prompt('Informe a nota do primeiro bimestre: '))
    nota2 = parseFloat(prompt('Informe a nota do segundo bimestre: '))
    notaFinal = nota1 + nota2
}

alert(`Sua nota final é: ${notaFinal}`)

if(notaFinal < 60){
    alert(`Você foi reprovado por ${60 - notaFinal} :c`)
}
else {
    alert('Você foi aprovado ! :D')
}