
    const botao = document.getElementById("btnEditar");
    const inputs = document.querySelectorAll("input");

    botao.addEventListener("click", () => {
        inputs.forEach(input => {
            input.disabled = false;
        });
    });

