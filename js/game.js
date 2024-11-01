
let body = document.querySelector("body")

let img = document.createElement("img")
img.src = "./img/naatal.png"
img.style.position = "absolute"
img.style.transform = "scale(0.2)" 

function alteraTamanhoMosquito(){
 let numeroAleatorio = Math.random() * (0.6 - 0.2)+0.2
 img.style.transform = `scale(${numeroAleatorio})`
}

function geraPosicao(){
    let y = Math.random() * (window.innerHeight * 0.8)
    let x = Math.random() * (window.innerWidth  * 0.8)

    img.style.top = `${y}px`
    img.style.top = `${x}px`
}

setInterval(function(){
    alteraTamanhoMosquito()
    geraPosicao()
}, 1000)

//Isso adiciona um elemento no body [h1 , p , div , etc]
body.appendChild(img)

