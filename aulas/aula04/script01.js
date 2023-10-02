function exibirMsg(msg){
    alert(msg)
}

function pegarTexto(){
    nome = document.getElementById("txtName").value

    // Função para eliminar os espaços vazios do String
    nome = nome.trim();

    // Validação para caso clique no botação com nada digitado
    if(nome == ""){
        alert("Favor digitar um texto")
    }
    else{
        alert(nome)
    }
    
}

function inserirText(){
    document.getElementById("txtName").value = "IFTM"
}