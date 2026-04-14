// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// BUSCA
function buscar() {
  alert("Busca em desenvolvimento");
}

// FORM WHATS
function enviarWhats(event) {
  event.preventDefault();

  let nome = document.querySelector('input').value;
  let email = document.querySelectorAll('input')[1].value;
  let msg = document.querySelector('textarea').value;

  let texto = `Olá, meu nome é ${nome}%0AEmail: ${email}%0AMensagem: ${msg}`;

  window.open(`https://wa.me/5547996730923?text=${texto}`, '_blank');
}

// DARK MODE
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});