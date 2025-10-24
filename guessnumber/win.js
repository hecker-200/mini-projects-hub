function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
  confetti.style.backgroundColor = Math.random() > 0.5 ? '#E6D28A' : '#2BAF7F';

  document.getElementById('confetti-container').appendChild(confetti);

  // remove after falling
  setTimeout(() => {
    confetti.remove();
  }, 4000);
}

// Generate confetti continuously
setInterval(createConfetti, 150);


document.querySelector('#phirse').addEventListener('click', (e)=>{

  window.location.href = "./index.html"; 
  
})



