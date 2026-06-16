function gerarTabuada() {
    const numeroInput = document.getElementById('numeroInput');
    let numero = parseInt(numeroInput.value);

    const resultadoDiv = document.getElementById('resultadoTabuada');
    resultadoDiv.innerHTML = '';

    if (isNaN(numero)) {
        resultadoDiv.innerHTML = '<p>Digite um número válido!</p>';
        return;
    }

    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}: </h2>`;

    for (let i = 1; i <= 10; i++) {
        let resultado = numero / i;
        resultadoDiv.innerHTML += `<p>${numero} ÷ ${i} = ${resultado.toFixed(2)}</p>`;
    }
}

// Faz a função gerarTabuada() ser executada quando clicar no botão
const btnGerar = document.getElementById('btnGerar')
btnGerar.addEventListener('click', gerarTabuada)