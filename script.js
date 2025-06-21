window.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';

  // Blurring logic with ResizeObserver
  const navbar = document.querySelector('.navbar');
  const blurOverlay = document.querySelector('#blurOverlay');
  const startSection = document.querySelector('#start');

  // Function to check scroll and apply blur
  const checkScroll = () => {
    // Shrink navbar when scrolled down
    if (window.scrollY > 50) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }

    // Check if start section is within 10vh from the top
    const rect = startSection.getBoundingClientRect();
    const tenVh = window.innerHeight * 0.2; // 10vh in pixels
    if (rect.bottom <= tenVh) {
      blurOverlay.classList.add('blur');
    } else {
      blurOverlay.classList.remove('blur');
    }
  };

  // Observe viewport resizes (better than window.resize)
  const resizeObserver = new ResizeObserver(checkScroll);
  resizeObserver.observe(document.documentElement); // Watch the entire viewport

  // Also run on initial scroll
  window.addEventListener('scroll', checkScroll);

  // Rest of your code (snow, audio, typewriter) remains unchanged...
  const snowContainer = document.getElementById('snow-container');
  const totalSnowflakes = 100;

  for (let i = 0; i < totalSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 5 + 5;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 10;
    const opacity = Math.random();
    const offsetY = Math.random() * 100 + 20;

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.top = `-${offsetY}px`;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = opacity;

    snowContainer.appendChild(snowflake);
  }

  // Audio and overlay logic
  const overlay = document.getElementById('startOverlay');
  const audioElement = document.getElementById('backgroundAudio');
  audioElement.loop = true;
  audioElement.volume = 0.6;

  overlay.addEventListener('click', () => {
    overlay.classList.add('fade-out');
    document.body.style.overflow = '';

    setTimeout(() => {
      overlay.style.display = 'none';
    }, 600);
    audioElement.play();
  });

  // Typewriter effect
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

  typeLoop();
});
