window.addEventListener("load", function (){
    document.getElementById("btnCadastrar").addEventListener("click", cadastrarUsuario);

    function cadastrarUsuario(){
        var user = document.getElementById("txtUser").value;

        var pwd = document.getElementById("txtPwd").value;

        var checkPwd = document.getElementById("txtCheckPwd").value

        if( user == "" || pwd == "" || checkPwd == ""){
            alertWifi("Preencha todas as informações", false, 0, "", 30, "");
        }

        else{
            
            if( pwd == checkPwd){
                var newUser = {nome:user , senha:pwd };
                var vetUsers = localStorage.getItem("vetUsers");
                
                if(!vetUsers){
                    // caso seja o primeiro cadastro = o vetor ainda não existe 
                    var vet = [];
                    vet.push(newUser);
                    localStorage.setItem("vetUsers", JSON.stringify(vet));
                // CRIAÇÃO DE CHAVE, NOME vetUsers E VALOR vet (VETOR QUE ARMAZENA NOVOS USUÁRIOS) CONVERTIDO EM STRING
                }
                else{
                    // O VETOR vet VEM COMO UM JSON DO LOCALSTORAGE, ENTÃO PRECISAMOS CONVERTER PARA ADICIONAR OS NOVOS USUÁRIOS
                    vet = JSON.parse(vetUsers);
                    var usuarioExistente = vet.find(function (usuario) {
                        return usuario.nome === newUser.nome && usuario.senha === newUser.senha;
                    });
                
                    if (usuarioExistente) {
                        alertWifi("Usuário já cadastrado", false, 0, "", 30, "cadastrar.html");
                    } else {
                        vet.push(newUser);
                        localStorage.setItem("vetUsers", JSON.stringify(vet));
                        alertWifi("Usuário cadastrado com sucesso", false, 0, "", 30, "index.html");
                    }
                }
                
             }
             
        }

    }


});
