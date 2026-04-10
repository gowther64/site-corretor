// BOTÃO HERO
const botaoHero = document.querySelector(".hero button");

botaoHero.addEventListener("click", () => {
    document.querySelector(".busca").scrollIntoView({
        behavior: "smooth"
    });
});

// SIMULAÇÃO DE BUSCA
const botaoBusca = document.querySelector(".busca button");

botaoBusca.addEventListener("click", () => {
    const cidade = document.querySelectorAll(".busca input")[0].value;
    const tipo = document.querySelectorAll(".busca input")[1].value;

    alert(`Buscando imóveis em ${cidade} do tipo ${tipo}`);
});