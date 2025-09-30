// Script para Exercício 1
document.getElementById('btnAlterarTitulo1').addEventListener('click', function() {
    document.title = 'Título Alterado com JavaScript';
});

// Script para Exercício 2
document.getElementById('corSelecionada2').addEventListener('change', function() {
    const cor = this.value;
    document.body.style.backgroundColor = cor;
});

// Script para Exercício 3
document.getElementById('btnAdicionar3').addEventListener('click', function() {
    const lista = document.getElementById('minhaLista3');
    const novoItem = document.createElement('li');
    novoItem.textContent = 'Novo Item';
    lista.appendChild(novoItem);
});

// Script para Exercício 4
const lista4 = document.getElementById('minhaLista4');

document.getElementById('btnAdicionar4').addEventListener('click', function() {
    const novoItem = document.createElement('li');
    novoItem.textContent = 'Novo Item';
    lista4.appendChild(novoItem);
});

document.getElementById('btnRemover4').addEventListener('click', function() {
    if (lista4.children.length > 0) {
        lista4.removeChild(lista4.lastElementChild);
    }
});

// Script para Exercício 5
const texto5 = document.getElementById('texto5');

document.getElementById('btnEsconder5').addEventListener('click', function() {
    texto5.style.display = 'none';
});

document.getElementById('btnExibir5').addEventListener('click', function() {
    texto5.style.display = 'block';
});

// Script para Exercício 6
let count6 = 0;
const contador6 = document.getElementById('contador6');

document.getElementById('btnClique6').addEventListener('click', function() {
    count6++;
    contador6.textContent = count6;
});

// Script para Exercício 7
const div7 = document.getElementById('minhaDiv7');

document.getElementById('btnAlterar7').addEventListener('click', function() {
    div7.textContent = 'Texto Alterado';
});

// Script para Exercício 8
document.getElementById('btnCriarTabela8').addEventListener('click', function() {
    const container = document.getElementById('containerTabela8');
    const tabela = document.createElement('table');
    tabela.border = '1';
    let numero = 1;

    for (let i = 0; i < 3; i++) {
        const linha = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const celula = document.createElement('td');
            celula.textContent = numero++;
            linha.appendChild(celula);
        }
        tabela.appendChild(linha);
    }

    container.innerHTML = ''; // Limpa conteúdo anterior
    container.appendChild(tabela);
});

// Script para Exercício 9
const quadrado9 = document.getElementById('quadrado9');
let posicao9 = 0;

document.getElementById('btnDireita9').addEventListener('click', function() {
    posicao9 += 50;
    quadrado9.style.left = posicao9 + 'px';
});

document.getElementById('btnEsquerda9').addEventListener('click', function() {
    posicao9 -= 50;
    if (posicao9 < 0) posicao9 = 0;
    quadrado9.style.left = posicao9 + 'px';
});

// Script para Exercício 10
document.getElementById('meuFormulario10').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede envio real
    const email = document.getElementById('email10').value;
    const mensagem = document.getElementById('mensagemErro10');

    if (email.includes('@')) {
        alert('E-mail válido! Formulário enviado.');
        mensagem.style.display = 'none';
    } else {
        mensagem.style.display = 'block';
    }
});
