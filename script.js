const nightSky = document.getElementById('night-sky');
const numberOfStars = 25;
const colors = ['lightseagreen', 'deepskyblue', 'violet', 'white', 'gold'];

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = Math.random() * 0.6 + 0.4;
  const duration = Math.random() * 3 + 2;
  const delay = Math.random() * 5;
  const top = Math.random() * 50 - 20;
  const left = Math.random() * 120 - 10;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  star.style.setProperty('--size', size);
  star.style.setProperty('--duration', `${duration}s`);
  star.style.setProperty('--delay', `${delay}s`);
  star.style.setProperty('--top', `${top}vh`);
  star.style.setProperty('--left', `${left}vw`);
  star.style.setProperty('--star-color', randomColor);

  nightSky.appendChild(star);
}
// Função para criar a mini nave com alienígena
function criarNaveEspacial() {
  const nightSky = document.getElementById('night-sky');
  
  const spaceship = document.createElement('div');
  spaceship.classList.add('alien-spaceship');
  spaceship.innerHTML = '🛸👽'; // Nave e alienígena acenando
  
  // Posição vertical aleatória na metade superior da tela
  const randomTop = Math.random() * 40 + 10;
  spaceship.style.top = `${randomTop}vh`;
  
  nightSky.appendChild(spaceship);

  // Remove a nave do HTML depois que a animação termina para não pesar a página
  setTimeout(() => {
    spaceship.remove();
  }, 8000);
}

// Define o tempo: 3000 milissegundos = 3 segundos (mude para 180000 se quiser exatamente 3 minutos)
setInterval(criarNaveEspacial, 3000);
