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
                var usuarios = {nome:user , senha:pwd };
                var usuarioString  = JSON.stringify(usuarios);

                localStorage.setItem("usuarios", usuarioString);
                alertWifi("Usuário cadastrado com sucesso", false, 0, "", 30, "");
            }
        }
    }
});


// document.getElementById("btnShowPwd").addEventListener("click", function () {
//     var senhaInput = document.getElementById("txtPwd");
//     var confirmarSenhaInput = document.getElementById("txtCheckPwd");

//     if (senhaInput.type === "password") {
//         senhaInput.type = "text";
//         confirmarSenhaInput.type = "text";
//     } else {
//         senhaInput.type = "password";
//         confirmarSenhaInput.type = "password";
//     }
// });