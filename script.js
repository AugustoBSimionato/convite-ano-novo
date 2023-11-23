function mostrarIngresso() {
  var introContainer = document.getElementById("intro-container");
  introContainer.style.display = "none";

  var mainContent = document.getElementById("main-content");
  mainContent.style.display = "block";

  var numeroIngresso = Math.floor(Math.random() * 9000) + 1000;

  atualizarNumeroIngresso(numeroIngresso);
}

function atualizarNumeroIngresso(numero) {
  var numeroIngressoElement = document.getElementById("numero-ingresso");
  if (numeroIngressoElement) {
    numeroIngressoElement.textContent = numero;
  }
}

function fecharAviso() {
  var aviso = document.getElementById("aviso");
  aviso.style.display = "none";

  var introContainer = document.getElementById("intro-container");
  introContainer.style.display = "block";
}
