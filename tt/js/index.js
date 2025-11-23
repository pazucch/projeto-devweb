//index
function abrirQuemSomos() {
    document.getElementById("modalQuemSomos").style.display = "block";
}
function fecharQuemSomos() {
    document.getElementById("modalQuemSomos").style.display = "none";
}
window.onclick = function(e) {
    const modal = document.getElementById("modalQuemSomos");
    if (e.target === modal) modal.style.display = "none";
}