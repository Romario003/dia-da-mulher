document.getElementById("surpresa").addEventListener("click", function() {
    alert("Você é incrível! Nunca se esqueça disso! 💖");
});
document.addEventListener("DOMContentLoaded", function () {
    let botao = document.getElementById("surpresa");
    let modal = document.getElementById("modal");
    let modalImagem = document.getElementById("modal-imagem");
    let fechar = document.getElementById("fechar");

    // Lista de imagens (troque pelos caminhos corretos)
    let imagens = [
        "rosa.png",
        "coracao.png",
        "heart.png",
        "flor.png"
    ];

    let index = 0; // Índice da imagem atual
    let intervalo = null; // Guardar referência do setInterval

    function abrirModal() {
        modal.style.display = "flex"; // Exibir modal
        modalImagem.src = imagens[index]; // Mostrar primeira imagem

        // Inicia a troca de imagens a cada 3 segundos
        intervalo = setInterval(function () {
            index = (index + 1) % imagens.length;
            modalImagem.src = imagens[index];
        }, 3000);
    }

    function fecharModal() {
        modal.style.display = "none"; // Esconder modal
        clearInterval(intervalo); // Parar a troca de imagens
    }

    // Adicionar eventos para clique e toque no botão
    botao.addEventListener("click", abrirModal);
    botao.addEventListener("touchstart", abrirModal);

    // Fechar modal ao clicar no "X"
    fechar.addEventListener("click", fecharModal);
    fechar.addEventListener("touchstart", fecharModal);
});
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona a classe "loaded" ao body assim que a página terminar de carregar
    document.body.classList.add("loaded");

    // Código da música ou outras funcionalidades
    var audio = new Audio("audio/musica.mp3");
    audio.play();

    document.getElementById("surpresa").addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

