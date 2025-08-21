// === MENU RESPONSIVO ===
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

// Fecha menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.classList.remove('active');
  });
});


// === SCROLL SUAVE ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// === ANIMAÇÃO AO ROLAR A PÁGINA ===
const elements = document.querySelectorAll('.animate');

function checkVisibility() {
  const windowHeight = window.innerHeight;
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < windowHeight && rect.bottom > 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);

// === FORMULÁRIO DE CONTATO ===
const form = document.getElementById('form-contato');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Obrigada pelo contato, retornarei em breve.');
    form.reset();
  });
}