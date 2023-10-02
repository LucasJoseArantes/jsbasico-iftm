 vetor= [20,30,40,50,60,70,80]
console.log(vetor)

// The pop() method removes the last element of an array.
console.log(vetor.pop())

// Consigo remover e exibir o item removido
ultimoItem = console.log(vetor.pop())

// Shift (remove) the first element of the array:
primeiroItem = console.log(vetor.shift())

// unshift() adds new elements to the beginning of an array.
console.log(vetor.unshift(5,7))
console.log(vetor)

// The splice() method adds and/or removes array elements.
// na posição 2 , adiciona 2 elementos
console.log(vetor.splice(2, 0, 45, 47))
console.log(vetor)
// na posição 2 , remove 2 elementos
console.log(vetor.splice(2,2))
console.log(vetor)