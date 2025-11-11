let aumentar = document.getElementById("BotaoIncrementar");
let contador = 0;
let diminuir = document.getElementById("BotaoDecrementar");
const texto = document.getElementById("titulo");
const body = document.getElementById("corpo");
let botao = document.getElementById("Add");
let lista = document.getElementById("lista");
let botaoAzul = document.getElementById("azul");
let botaoVermelho = document.getElementById("vermelho");
let botaoVerde = document.getElementById("verde");
let Seletor = document.getElementById("seletor");
body.style.backgroundColor = "gray";
const btnRemover = document.getElementById("BotaoRemover");

btnRemover.addEventListener("click", () =>{
  if (lista.lastChild) {
    lista.removeChild(lista.lastChild);
  }
})

botao.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = "novo item";
  lista.appendChild(item);
});

aumentar.addEventListener("click", () => {
  contador++;
  texto.innerText = "contador" + contador;
});

diminuir.addEventListener("click", () => {
  contador--;
  texto.innerText = "contador" + contador;
});

Seletor.addEventListener("input", (color) => {
  body.style.backgroundColor = Seletor.value;
});