const serieA = [
    { nome: "Flamengo", pontos: 71, logo: "assets/fla.png", titulos: "1980, 1982, 1983, 1992, 2009, 2019, 2020" },
    { nome: "Palmeiras", pontos: 68, logo: "assets/palm.png", titulos: "1972, 1973, 1993, 1994, 2016, 2018, 2022, 2023" },
    { nome: "Cruzeiro", pontos: 64, logo: "assets/Cruzeiro.png", titulos: "1966, 2003, 2013, 2014" },
    { nome: "Mirassol", pontos: 59, logo: "assets/Mirassol.png", titulos: "Ainda não possui títulos da Série A" },
    { nome: "Bahia", pontos: 53, logo: "assets/bahia.png", titulos: "1959, 1988" }
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

if (document.getElementById("listaA")) {
document.addEventListener("DOMContentLoaded", () => {
    carregarSerie(serieA, "listaA");
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