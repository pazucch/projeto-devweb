const serieB = [
    { nome: "Coritiba", pontos: 71, logo: "../assets/coxa.png", titulos: "2007, 2010" },
    { nome: "Athlético PR", pontos: 68, logo: "../assets/furacao.png", titulos: "1995" },
    { nome: "Criciúma", pontos: 64, logo: "../assets/criciuma.png", titulos: "2002" },
    { nome: "Goiás", pontos: 59, logo: "../assets/goias.png", titulos: "1999, 2012" },
];

function carregarSerie(lista, elementoId) {
    const container = document.getElementById(elementoId);

    if (!container) {
        console.error(`Elemento com ID ${elementoId} não encontrado.`);
        return;
    }

    lista.forEach(time => {
        const card = document.createElement("div");
        card.className = "team-card";

        card.innerHTML = `
            <div class="team-info">
                <img class="logo" src="${time.logo}" alt="logo do ${time.nome}">
                <span>${time.nome}</span>
            </div>

            <h2 class="points">${time.pontos}</h2>

            <div class="tooltip">
                <strong>Títulos:</strong><br>${time.titulos}
            </div>
        `;

        container.appendChild(card);

        card.addEventListener("click", () => {
        document.getElementById("modalNome").textContent = time.nome;
        document.getElementById("modalLogo").src = time.logo;
        document.getElementById("modalPontos").textContent = time.pontos;
        document.getElementById("modalTitulos").textContent = time.titulos;

        document.getElementById("modalTime").style.display = "flex";
    });
    });
}

if (document.getElementById("listaB")) {
document.addEventListener("DOMContentLoaded", () => {
    carregarSerie(serieB, "listaB");
});

document.getElementById("fecharModal").onclick = () => {
    document.getElementById("modalTime").style.display = "none";
};

window.onclick = (e) => {
    if (e.target === document.getElementById("modalTime")) {
        document.getElementById("modalTime").style.display = "none";
    }
};
}
