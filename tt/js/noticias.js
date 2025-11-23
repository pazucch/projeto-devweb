// ==============================
// Seletores principais
// ==============================

const destaque = document.getElementById("breakingimg");
const destaqueTitulo = document.querySelector(".highlight-text h2");
const destaqueDescricao = document.querySelector(".highlight-text p");
const destaqueLink = document.querySelector(".lermais");

// ==============================
// Lista de destaques
// ==============================

const destaques = [
    {
        img: "./assets/copa.webp",
        titulo: "Repescagem intercontinental para a Copa do Mundo está definida",
        descricao: "Torneio Classificatório para a Copa de 2026 reúne seis seleções em busca das últimas vagas.",
        link: "https://www.fifa.com/pt/tournaments/mens/worldcup/canadamexicousa2026/articles/sorteio-torneio-classificatorio-repescagem-copa-mundo-2026"
    },
    {
        img: "./assets/noticia1.jpeg",
        titulo: "Brasil x Marrocos, um confronto à base de superação no Mundial Sub-17",
        descricao: "Seleção encara duelo decisivo em campanha surpreendente e emocionante.",
        link: "https://www.fifa.com/pt/tournaments/mens/u17worldcup/qatar-2025/articles/marrocos-brasil-copa-mundo-sub-17"
    },
    {
        img: "./assets/noticia3.jpeg",
        titulo: "Fã dos Ronaldos e inspirado por Eder: conheça Anísio Cabral",
        descricao: "Jovem promessa portuguesa ganha atenção mundial após atuações marcantes.",
        link: "https://www.fifa.com/pt/tournaments/mens/u17worldcup/qatar-2025/articles/anisio-cabral-portugal-sub-17"
    }
];

let indice = 0;


// ==============================
// Função para atualizar o destaque
// ==============================

function atualizarDestaque() {
    const d = destaques[indice];

    destaque.src = d.img;
    destaqueTitulo.textContent = d.titulo;
    destaqueDescricao.textContent = d.descricao;
    destaqueLink.href = d.link;

    destaque.classList.add("fadeSwap");
    setTimeout(() => destaque.classList.remove("fadeSwap"), 500);
}


// ==============================
// Troca automática
// ==============================

setInterval(() => {
    indice = (indice + 1) % destaques.length;
    atualizarDestaque();
}, 6000);


// ==============================
// Clique nas notícias → vira destaque
// ==============================

const noticias = document.querySelectorAll(".news");

noticias.forEach((noticia, i) => {
    noticia.addEventListener("click", () => {
        indice = i % destaques.length;
        atualizarDestaque();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


// ==============================
// Animação hover nos cards
// ==============================

noticias.forEach(noticia => {
    noticia.addEventListener("mouseover", () => {
        noticia.style.transform = "scale(1.02)";
    });

    noticia.addEventListener("mouseout", () => {
        noticia.style.transform = "scale(1)";
    });
});
