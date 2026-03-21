// ---------- MENU HAMBURGUER ----------
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");

    menu.classList.toggle("open"); // 🔥 corrigido
    icon.classList.toggle("open");
}
// ---------- SCROLL ANIMATIONS ----------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); // reaparece ao rolar para cima
        }
    });
}, { threshold: 0.2 });

// observa todos os elementos com .hidden
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// ---------- FORMULÁRIO WHATSAPP ----------
const form = document.getElementById("whatsapp-form");

if (form) { // garante que o form existe antes de adicionar o listener
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !mensagem) return;

        const numero = "5511999999999"; // substitua pelo seu número
        const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
        form.reset();
    });
}