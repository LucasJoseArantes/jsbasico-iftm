window.addEventListener("load", function(){
    document.getElementById("btnAdd").addEventListener("click", function(){
        var img = document.createElement("img");
        var p = document.createElement("p");
        var box = document.createElement("div");
        var btnDel = document.createElement("button");
        
        p.textContent = document.getElementById("name").value;
        img.setAttribute("src", "img/iconEven150px.png");
       
        img.addEventListener("click", function(){
            alert("oi")
        })

        div = document.getElementById("div")
        div.appendChild(box);
        div.setAttribute("style" , "display: flex; flex-direction:row; margin-top: 10px; text-align: center; flex-wrap: wrap;");

        btnDel.textContent = "Deletar"
       

        box.appendChild(img);
        box.appendChild(p);
        box.appendChild(btnDel);


        btnDel.addEventListener("click", function(){
            box.remove();
        })

        
    })

    
});

document.getElementById("removeAll").addEventListener("click", function(){
    var confirmacao = confirm('Você confirma a ação?');    
    if (confirmacao) {
        div.remove();
        location.reload();
    }

});



