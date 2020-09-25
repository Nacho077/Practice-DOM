var btn = document.querySelector("#btn");
btn.onclick = leerInput;


function preparar(cancoca, canfernet){
    var fernet = document.querySelector("#fernet");
    var coca = document.querySelector("#coca");
    fernet.innerHTML = "Fernet: ";
    coca.innerHTML = "Coca :";
    if(typeof(cancoca) === "number" && typeof(canfernet) === "number"){
        fernet.innerHTML = "Fernet: " + canfernet + "L";
        coca.innerHTML = "Coca: " + cancoca + "L";
    }
}

function leerInput(){
    var input = document.querySelector(".input");
    var preparo = input.value;
    var ligero = document.querySelector("#ligero");
    var normal = document.querySelector("#normal");
    var fuerte = document.querySelector("#fuerte");
    var cantCoca;
    var cantFernet
    if(ligero.className === "h-elegido"){
        cantCoca = Number(preparo) * 0.9;
        cantFernet = Number(preparo) * 0.1;
    }else if(normal.className === "h-elegido"){
        cantCoca = Number(preparo) * 0.7;
        cantFernet = Number(preparo) * 0.3;
    }else if(fuerte.className === "h-elegido"){
        cantCoca = Number(preparo) * 0.5;
        cantFernet = Number(preparo) * 0.5;
    }
    preparar(cantCoca, cantFernet)
}

var hs = document.querySelectorAll("h2");
var divs = document.querySelectorAll("div");
for(var i = 0; i < 3; i++){
    hs[i].addEventListener("click", function(e){
        var target = e.target;
        if(target.className === "h-no-elegido"){
            for(var l = 0; l < 3; l++){
                hs[l].className = "h-no-elegido";
                divs[l].className = "no-elegido";
            }
            target.className = "h-elegido";
            e.composedPath("div")[1].className = "elegido";
        }
    })
}