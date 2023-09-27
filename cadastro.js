document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroFormulario");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Recupere os valores do formulário
        const placa = document.getElementById("placa").value;
        const proprietario = document.getElementById("proprietario").value;
        const apartamento = document.getElementById("apartamento").value;
        const bloco = document.getElementById("bloco").value;
        const modelo = document.getElementById("modelo").value;
        const cor = document.getElementById("cor").value;
        const numeroVaga = document.getElementById("numeroVaga").value;
        
        const reserva = {
            placa, 
            proprietario,
            apartamento,
            bloco, 
            modelo, 
            cor, 
            numeroVaga
        };
        
        console.log("Dados do Formulário:", reserva)

        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        reservas.push(reserva);
        
        localStorage.setItem("reservas", JSON.stringify(reservas));

        
        alert("Reserva Criada com Sucesso")
        form.reset();
    });
});