
let Clicou = true
let score = 0
let vidas = 3

let body = document.querySelector("body")

let img = document.createElement("img")
img.src = "./img/naatal.png"
img.style.position = "absolute"
img.style.transform = "scale(0.2)"

function alteraTamanhoMosquito() {
    let numeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2
    img.style.transform = `scale(${numeroAleatorio})`
}

function geraPosicao() {
    let y = Math.random() * (window.innerHeight * 0.7)
    let x = Math.random() * (window.innerWidth * 0.7)

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}

img.addEventListener("click", function () {
    Clicou = true
    img.remove()
})

setInterval(function () {
    alteraTamanhoMosquito()
    geraPosicao()
    body.appendChild(img)

    if (!Clicou) {
        vidas--

        if (vidas == 2) {
            let palito3 = document.getElementById("palito-3")
            palito3.src = "img/palito-vazio.png"
        }
        else if (vidas == 1) {
            let palito2 = document.getElementById("palito-2")
            palito2.src = "img/palito-vazio.png"
        }
        else if (vidas == 0) {
            let palito1 = document.getElementById("palito-1")
            palito1.src = "img/palito-vazio.png"

            window.location.href = "../gameover.html"
            localStorage.setItem(score)
        }
    }

    Clicou = false



}, 2000)
