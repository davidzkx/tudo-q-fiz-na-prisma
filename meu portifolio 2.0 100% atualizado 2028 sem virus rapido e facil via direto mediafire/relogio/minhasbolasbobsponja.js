let relogio = document.getElementById("relogio")

function atualizarRelogio(){
    let horario = new Date();
    let hora = horario.getHours().toString().padStart(2, "0")
    let minuto = horario.getMinutes().toString().padStart(2, "0")
    let segundo = horario.getSeconds().toString().padStart(2, "0")

    relogio.innerText = hora + ":" + minuto + ":" + segundo
}

setInterval(atualizarRelogio, 1000)

// Cronometro
let cronometro = document.getElementById("cronometro")
let iniciar = document.getElementById("iniciar")
let parar = document.getElementById("parar")
let zerar = document.getElementById("zerar")

let tempo_cronometro = [0, 0, 0]
function atualizarCronometro(){
    tempo_cronometro[2]++;

    if(tempo_cronometro[2] == 60){
        tempo_cronometro[2] = 0
        tempo_cronometro[1]++
    }

    if(tempo_cronometro[1] == 60){
        tempo_cronometro[1] = 0
        tempo_cronometro[0]++
    }

    cronometro.innerText = tempo_cronometro[0].toString().padStart(2, "0") + ":" + tempo_cronometro[1].toString().padStart(2, "0") + ":" + tempo_cronometro[2].toString().padStart(2, "0")
}

let id
let ativo = false
parar.style.display = "none"
zerar.style.display = "none"
iniciar.addEventListener("click", ()=>{
    if(ativo == false){
        id = setInterval(atualizarCronometro, 1000);
        ativo = true
        parar.style.display = "inline"
        zerar.style.display = "inline"
        iniciar.style.display = "none"
    }
})

parar.addEventListener("click", ()=>{
    clearInterval(id)
    ativo = false
    parar.style.display = "none"
    iniciar.style.display = "inline"
})

zerar.addEventListener("click", ()=>{
    tempo_cronometro = [0, 0, 0]
    cronometro.innerText = "00:00:00"
    if(ativo == false){
        zerar.style.display = "none"
    }
})

let temporizador = document.getElementById("temporizador")
let tempo = document.getElementById("tempo")
let botao = document.getElementById("botao")

let tempo_temporizaador
function atualizarTemporizador(){
    tempo_temporizador[2]== -1){

        if(tempo_temporizador[2] == -1){
            tempo_temporizador[2] = 59
            tempo_temporizador[1] --
        }
    
        if(tempo_temporizador[1] == -1){
            tempo_temporizador[1] = 59
            tempo_temporizador[0] --
        }

        temporizador.innerText = tempo_temporizador[0].toString().padStart(2, "0") + ":" + 
          tempo_temporizador[1].toString().padStart(2, "0") + ":" +
           tempo_temporizador[0].toString().padStart(2, "0") + ":" + 