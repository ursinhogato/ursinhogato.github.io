const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const celebration = document.getElementById('celebration');
const question = document.getElementById('question');
const buttons = document.getElementById('buttons');

yesBtn.addEventListener('click', () => {
  question.textContent = 'Je t\'aime tellement! 💕';
  buttons.style.display = 'none';
  celebration.classList.remove('hidden');
  createConfetti();
});

noBtn.addEventListener('mouseover', () => {
  // Gera coordenadas aleatórias para mover o botão
  const randomX = Math.random() * 200 - 100; // -100 a 100
  const randomY = Math.random() * 200 - 100; // -100 a 100
  
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // Reseta a posição ao clicar
  noBtn.style.transform = 'translate(0, 0)';
});

// Confetti animation
function createConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 5 + 2,
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * 5 + 3,
      color: ['#667eea', '#764ba2', '#f54e4e', '#ffd700'][Math.floor(Math.random() * 4)]
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    
    if (particles.some(p => p.y < canvas.height)) {
      requestAnimationFrame(animate);
    }
  }
  
  animate();
}

window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});