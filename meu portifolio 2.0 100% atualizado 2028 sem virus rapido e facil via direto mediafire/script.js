console.log(testando conexão)

let nome = document.getElementById("nome")
let assunto = document.getElementById("assunto")
let descrição = document.getElementById("descricao")
let botão = document.getElementById("botao")

let api = "https://api.whatsapp.com/send?"
let telefone = "552992982177"

botao.addEventListener("click", () => {
    let mensagem = `Olá meu nome é ${nome.value}, gostaria de falar sobre ${assunto.value}. ${descrição.value}`