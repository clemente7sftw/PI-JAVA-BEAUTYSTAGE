const botao = document.getElementById("btnAdmin");

botao.addEventListener("click", function (event) {
    event.preventDefault(); // impede o submit
    alert("Admistrador cadastrado com sucesso! Esse administrador já pode fazer login na plataforma e ter acesso aos clientes, profissionais e agendamentos da empresa.");
    window.location.href = "../html/admin_geral_administradores.html";
});
