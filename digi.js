let numero=document.querySelectorAll(".bouton")
let texte = document.querySelector("p")
let code=("1234")
let screen =document.querySelector("#ecran")
let reset = document.querySelector(".boutonReset")

for (let i = 0; i<numero.length; i++) {
    numero[i].addEventListener("click", function touche() {
        console.log(numero[i].innerHTML+" bravo");
        texte.innerHTML += numero[i].innerHTML


    if (texte.innerHTML===code){
        screen.style.backgroundColor="green";
    }
    if (texte.innerHTML.length>=4 && texte.innerHTML!==code && texte.innerHTML.length<=4) {
        screen.style.backgroundColor="red"
        console.log("okok")
        
    }
    

} )
}

reset.addEventListener("click", function () {
    texte.innerHTML="";
    screen.style.backgroundColor="";
})





    
