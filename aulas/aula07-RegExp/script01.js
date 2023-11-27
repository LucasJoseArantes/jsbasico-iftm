window.addEventListener("load", function(){
    document.getElementById("btn").addEventListener("click", function(){

        var input = document.getElementById("txt").value;

        var padrao = /^\$/;

        if(padrao.test(input)){
            alert("Valido")

        }else{
            alert("Invalido")
        }
    })

})