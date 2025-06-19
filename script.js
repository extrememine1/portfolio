document.body.style.overflow = 'hidden';

// main menu
const overlay = document.getElementById('startOverlay');
const audioElement = document.getElementById('backgroundAudio');

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.body.style.overflow = '';
  audioElement.play();
});

/* Typewriter - Credits to Cheng Hsuan*/
const words = [
  "Macro Developer",
  "UI/UX Designer",
  "Game Developer",
  "Coding Enthusiast",
  "Gamer",
  "Student Leader",
  "Publications Officer"
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

window.onload = typeLoop;
