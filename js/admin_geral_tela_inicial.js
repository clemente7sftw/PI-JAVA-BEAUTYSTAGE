const lista = document.getElementById("listaServicos");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

function atualizarFlechas() {
    const temRegistros = lista.children.length > 0;

    if (!temRegistros) {
        arrowLeft.style.display = "none";
        arrowRight.style.display = "none";
        return;
    }

    // Flecha direita aparece se ainda dá para rolar mais
    arrowRight.style.display =
        lista.scrollLeft + lista.clientWidth < lista.scrollWidth
            ? "block"
            : "none";

    // Flecha esquerda aparece só se já rolou
    arrowLeft.style.display =
        lista.scrollLeft > 0 ? "block" : "none";
}

// rolar para os lados
arrowRight.addEventListener("click", () => {
    lista.scrollBy({ left: 200, behavior: "smooth" });
});

arrowLeft.addEventListener("click", () => {
    lista.scrollBy({ left: -200, behavior: "smooth" });
});

// atualizar ao rolar
lista.addEventListener("scroll", atualizarFlechas);

// atualizar ao carregar
window.addEventListener("load", atualizarFlechas);
