// Caixa de diálogo 
// alert("Welcome");

nome = prompt("Digite seu nome ", "Lucas")
sobrenome = prompt("Digite seu sobrenome ", "Jose")

// O segundo parâmetro do prompt já é o texto que preenche a caixa

nomeSobrenome = nome + " " + sobrenome;

// Solucção Antiquada
// alert ("O seu nome completo é: " + nomeSobrenome)

// O + é um operador sobrecarregado: Ele pode somar valores "10+20 = 30" , ou concatenar dados (String)"Lucas + Jose = LucasJose"

// Posso usar " " ou ' ' 

// Solução Template String
alert(`Nome Completo = ${nome} ${sobrenome}`)
// Uso da crase, para inserir uma váriavel usa=se ${VARIAVEL}

