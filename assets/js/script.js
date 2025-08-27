// === MENU RESPONSIVO ===
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
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
}

// === SCROLL SUAVE ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		const href = this.getAttribute('href');
		if (href.length > 1 && document.querySelector(href)) {
			e.preventDefault();
			const target = document.querySelector(href);
			target.scrollIntoView({
				behavior: 'smooth'
			});
		}
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
window.addEventListener('DOMContentLoaded', checkVisibility);

// === FORMULÁRIO DE CONTATO ===
const form = document.getElementById('form-contato');
if(form){
	form.addEventListener('submit', function(e){
		// Permite o envio normal do Formspree
		setTimeout(()=>{
			alert('Mensagem enviada com sucesso! Obrigada pelo contato, retornarei em breve.');
		}, 500);
	});
}
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener("submit", function (event) {
	event.preventDefault();

	const campoNome = document.querySelector("#name");
	const errNome = document.querySelector("#errNome");

	if (campoNome.value.length < 3) {
		errNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres.";
		campoNome.focus();
		return;
	} else {
		errNome.innerHTML = "";
	}

	const campoEmail = document.querySelector("#email");
	const errEmail = document.querySelector("#errEmail");

	if (!campoEmail.value.match(emailRegex)) {
		errEmail.innerHTML = "Digite um E-mail válido. Ex: email@email.com";
		campoEmail.focus();
		return;
	} else {
		errEmail.innerHTML = "";
	}

	const campoSubject = document.querySelector("#subject");
	const errSubject = document.querySelector("#errSubject");

	if (campoSubject.value.length < 5) {
		errSubject.innerHTML = "O Assunto deve ter no mínimo 5 caracteres.";
		campoSubject.focus();
		return;
	} else {
		errSubject.innerHTML = "";
	}

	const campoMessage = document.querySelector("#message");
	window.alert("Mensagem enviada com sucesso! Obrigada pelo contato, retornarei em breve.");

	campoNome.value = "";
	campoEmail.value = "";
	campoSubject.value = "";
	campoMessage.value = "";
});