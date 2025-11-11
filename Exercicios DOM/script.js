let aumentar = document.getElementById("botao")
let contador = localStorage.getItem("cv")
let clicks = document.getElementById("clicks")

texto.innerText = contador + " clicks"

aumentar.addEventListener("click", () => {
    contador++
    localStorage.setItem("cv", contador)
    texto.innerText = contador + " clicks"
})
