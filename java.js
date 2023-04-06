const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
});

const name = "Matias Ezequiel Carbone";
const title = "developer junior";

const nameEl = document.querySelector(".typing-animation h1 .typing-text");
const titleEl = document.querySelector(".typing-animation h2 .typing-text");
const cursorEl = document.querySelectorAll(".typing-animation .cursor");

let speed = 180;
let cursorIndex = -1;
let typingComplete = false;
let interval;

function type(el, text) {
  if (typingComplete) return;
  let index = 0;
  interval = setInterval(() => {
    el.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);
      setTimeout(() => {
        cursorIndex++;
        if (cursorIndex === cursorEl.length) cursorIndex = 0;
        cursorEl[cursorIndex].classList.add("active");
        setTimeout(() => {
          cursorEl[cursorIndex].classList.remove("active");
          if (el === nameEl) {
            typingComplete = true;
            setTimeout(() => type(titleEl, title), 500);
          }
        }, 500);
      }, 1000);
    }
  }, speed);
}

type(nameEl, name);

// Obtener todos los enlaces del menú de navegación
const navLinks = document.querySelectorAll('nav a');

// Agregar un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Prevenir el comportamiento predeterminado del enlace
    e.preventDefault();
    
    // Obtener el destino del enlace a partir de su atributo href
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Desplazarse suavemente hasta la sección de destino
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

