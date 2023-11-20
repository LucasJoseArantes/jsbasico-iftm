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

        }

    }
});