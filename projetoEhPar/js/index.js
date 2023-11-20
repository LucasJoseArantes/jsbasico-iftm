window.addEventListener("load", function (){
    document.getElementById("btnLogin").addEventListener("click", checkLogin);

    function checkLogin(){
        var user = document.getElementById("txtUser").value;
        var pwd = document.getElementById("txtPwd").value;
        var vetUsers;

        if(user == "" || pwd == ""){
            alertWifi("Preencha todas as informações", false, 0, "", 30, "");
        }

        else{
            vetUsers = localStorage.getItem("vetUsers");

            if(!vetUsers){
                alertWifi("Ainda não há usuários Cadastrados", false, 0, "", 30, "");
            }

            else{
                vetUsers = JSON.parse(vetUsers);
                var findUser = false;

                for(i=0; i < vetUsers.length; i++) {
                    
                    if(vetUsers[i].nome == user && vetUsers[i].senha == pwd){
                        findUser = true;
                        break;
                    }
                   
                }

                if(findUser == true) alertWifi("Usuário encontrado", false, 0, "", 30, "jogo.html");
                else alertWifi("Usuário não encontrado", false, 0, "", 30, "");
            }

        }

    }
});