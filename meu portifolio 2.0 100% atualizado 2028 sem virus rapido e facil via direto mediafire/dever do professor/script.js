const botaoMostrar = document.getElementById('botaoMostrar');
const areaDetalhes = document.getElementById('areaDetalhes');
let isVisible = false;
botaoMostrar.addEventListener('click', function() {
    areaDetalhes.classList.toggle('visivel');
    botaoMostrar.textContent = isVisible ? 'ocultar detalhes' : 'mostrar detalhes';
});
console.log("testando conexão")