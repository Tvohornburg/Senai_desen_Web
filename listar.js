document.addEventListener("DOMContentLoaded", function () {
    const listaVagas = document.getElementById("listaVagas");

    
    const reservas = JSON.parse(localStorage.getItem("reservas"));
    if (reservas && reservas.length > 0) {
        reservas.forEach(function (reserva, index) {
            console.log("Dados do Formulário:", reserva)
            const vaga = document.createElement("div");
            vaga.innerHTML = `
            <div class="lista">
                <h3>Reserva ${index + 1}:</h3><br>
                <p>Placa: ${reserva.placa}</p><br>
                <p>Proprietário: ${reserva.proprietario}</p><br>
                <p>Apartamento: ${reserva.apartamento}</p><br>
                <p>Bloco: ${reserva.bloco}</p><br>
                <p>Modelo: ${reserva.modelo}</p><br>
                <p>Cor: ${reserva.cor}</p><br>
                <p>Número da Vaga: ${reserva.numeroVaga}</p><br>
                <button class="remover" data-index="${index}">Remover</button>
                <br><br>
                
            </div>
            `;

            const remover = vaga.querySelector(".remover");
            remover.addEventListener("click", function () {
                
                const indexToRemove = parseInt(this.getAttribute("data-index"));
                reservas.splice(indexToRemove, 1);
                localStorage.setItem("reservas", JSON.stringify(reservas));
                vaga.remove();
                alert("Reserva Removida com Sucesso")
            });




            listaVagas.appendChild(vaga);
        });
}   

    else {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Nenhuma reserva de vaga encontrada.";
        listaVagas.appendChild(mensagem);



}
});
