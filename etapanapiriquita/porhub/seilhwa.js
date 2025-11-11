const fs = require('fs');

fs.readFile('entrada.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    const textoTransformado = data.toUpperCase();

    fs.writeFile('saida.txt', textoTransformado, (err) => {
        if (err) {
            console.error('Erro ao escrever o arquivo:', err);
            return;
        }
        console.log('Arquivo saida.txt criado com sucesso!');
    });
});