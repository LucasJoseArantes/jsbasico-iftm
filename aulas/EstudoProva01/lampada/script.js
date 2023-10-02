lampada = document.getElementById("lampada");
btnLuz = document.querySelector(".btn-luz");
body = document.body;

var contador = 0;

lampada.src = "img/apagada.png";
btnLuz.innerHTML = "CLIQUE PARA LIGAR";
body.classList.add("escuro"); 


btnLuz.addEventListener("click", function (){
    if (lampada.src.endsWith('apagada.png')) {
        acenderLuz('acessa', 'CLIQUE PARA DESLIGAR');
    } else {
        apagarLuz('apagada', 'CLIQUE PARA LIGAR');
    }
    
    contador++;

    if(contador == 10){
        lampada.src = `img/quebrada.jpg`;
        btnLuz.innerHTML =  `CLIQUE PARA TROCAR A LAMPADA`;
        body.classList.add("escuro");  
        contador = 0;
    }
    
})

function apagarLuz(luz, mensagem){
    lampada.src = `img/${luz}.png`;
    btnLuz.innerHTML =  `${mensagem}`;
    body.classList.add("escuro");  
    
}

function acenderLuz( luz,mensagem){
    lampada.src = `img/${luz}.png`;
    btnLuz.innerHTML =  `${mensagem}`;
    body.classList.remove("escuro");
    
}

