const aumentar = document.getElementById("incrementar")
const diminuir = document.getElementById("decrementar")
const texto = document.getElementById("titulo")
let contador = 0

aumentar.addEventListener("click",() => {
    contador++
    console.log(contador)
    texto.innerText = "contador" + contador
})

diminuir.addEventListener("click",() => {
    contador--
    console.log(contador)
    texto.innerText = "contador" + contador
})