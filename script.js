window.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  
  // snow
  const snowContainer = document.getElementById('snow-container');
  const totalSnowflakes = 200;

  for (let i = 0; i < totalSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 5 + 5;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 10;
    const opacity = Math.random();
    const offsetY = Math.random() * 100 + 20; // Random start height above screen

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.top = `-${offsetY}px`;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = opacity;

    snowContainer.appendChild(snowflake);
  }

  
  // audio
  const overlay = document.getElementById('startOverlay');
  
  const audioElement = document.getElementById('backgroundAudio');
  audioElement.loop = true;
  audioElement.volume = 0.6;

  overlay.addEventListener('click', () => {
    overlay.classList.add('fade-out');  // start fading out
    document.body.style.overflow = '';

  // Wait for the transition to finish (600ms here)
    setTimeout(() => {
      overlay.style.display = 'none';   // hide after fade out
  }, 600);
    audioElement.play();
  });
  
  // typewriter credit to cheng
  const words = [
    "Macro Developer",
    "UI/UX Designer",
    "Game Developer",
    "Coding Enthusiast",
    "Gamer",
    "Student Leader",
  ];
  const el = document.getElementById("typewriter");
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentWord = words[wordIndex];
    const visibleText = currentWord.substring(0, letterIndex);
    el.textContent = visibleText;

    if (!isDeleting && letterIndex < currentWord.length) {
      letterIndex++;
      setTimeout(typeLoop, 60);
    } else if (isDeleting && letterIndex > 0) {
      letterIndex--;
      setTimeout(typeLoop, 30);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(typeLoop, 700);
    }
  }

  // Start the typewriter effect
  typeLoop();
});
