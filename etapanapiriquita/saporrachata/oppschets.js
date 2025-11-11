import * as fs from "fs";

fs.readFile("./frase.txt", "utf-8", (erro, dados) => {
    if (erro) {
        console.log("Deu erro na leitura do arquivo", erro);
        return;
    }

    let frase = dados.split(" ")
    console.log("O arquivo tem " + frase.length + " palavras")
})