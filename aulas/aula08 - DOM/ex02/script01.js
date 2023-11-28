window.addEventListener("load", function(){
    document.getElementById("btnAdd").addEventListener("click", function(){
       var img = document.createElement("img");
       var p = document.createElement("p");
        

       img.setAttribute("src", "img/iconEven150px.png")

       document.getElementById("div").appendChild(img);
    })
});

