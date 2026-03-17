const resposta = prompt("Qual é a melhor pessoa desse mundo? 🥰");

if (resposta === "Ysabella") {
  alert("Acertou 🤍 Bem-vinda, meu amor ✨");
} else {
  alert("Resposta incorreta 😜 Dica: é o seu nome 💕");
  location.reload();
}

function tocarMusica() {
  const musica = document.getElementById("musica");
  musica.play();
}