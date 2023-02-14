document.getElementById("current_date").innerHTML = Date();

botaoSair.addEventListener('clicar', confirmarSaida)

function confirmarSaida() {
    confirm("tem certeza?")
}