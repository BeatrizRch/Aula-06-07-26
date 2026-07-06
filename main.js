// Menu responsivo
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
    }
});

// Contador animado
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const update = () => {
        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.floor(count).toLocaleString("pt-BR");
            requestAnimationFrame(update);
        } else {
            counter.innerText = target.toLocaleString("pt-BR");
        }
    };

    update();
});

// Botão voltar ao topo
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
padding:12px 16px;
border:none;
border-radius:50%;
background:#2563eb;
color:white;
font-size:20px;
cursor:pointer;
display:none;
`;

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Ano automático no rodapé
const ano = document.getElementById("ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}
