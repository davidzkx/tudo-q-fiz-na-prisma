
let botao = document.getElementById("botao");
let biografia = document.getElementById("biografia");

botao.addEventListener("click", () => {
    biografia.classList.toggle("esconder");
});


let form = document.getElementById("form");
let tarefaInput = document.getElementById("tarefa");
let lista = document.getElementById("lista");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let textoTarefa = tarefaInput.value.trim();
    
    if (textoTarefa !== "") {
        let novoItem = document.createElement("li");
        novoItem.textContent = textoTarefa;
        
        
        novoItem.addEventListener("click", () => {
            novoItem.classList.toggle("concluído");
        });
        
        lista.appendChild(novoItem);
        
        tarefaInput.value = "";
    }
});
