alert('Digite os valores para cor em RGB, cada valor deverá estar dentro do intervalo [0,255]')
corR = parseInt(prompt('Digite o valor de vermelho'))
corG = parseInt(prompt('Digite o valor de verde'))
corB = parseInt(prompt('Digite o valor de azul'))

while (isNaN(corR) || isNaN(corG) || isNaN(corB) || corR < 0 || corR > 255 || corG < 0 || corG > 255 || corB < 0 || corB > 255 || corR == null || corG == null || corB == null) {
    corR = parseInt(prompt('Digite o valor válido de vermelho'))
    corG = parseInt(prompt('Digite o valor válido de verde'))
    corB = parseInt(prompt('Digite o valor válido de azul'))
}

alert(`Sua cor RGB é ${corR} , ${corG} , ${corB}`)

document.write(`<h1 style="color: rgb(${corR},${corG},${corB});"> Fundamentos do Web Design II </h1>`) 
