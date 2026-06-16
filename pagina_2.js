function gerarTabuada(){

    const numeroInput = document.getElementById('numeroInput');

    let numero = parseInt(numeroInput.value);

    const resultadoDiv =
    document.getElementById('resultadoTabuada');

    resultadoDiv.innerHTML = '';

    resultadoDiv.innerHTML += `<h2>Tabuada de Subtração do ${numero}</h2>`;

    for (let i = 1; i <= 10; i++) {
        let resultado = numero - i
        resultadoDiv.innerHTML += `<p>${numero} - ${i} = ${resultado}</p>`;
    }

}

const btnGerar = 
document.getElementById('btnGerar');

btnGerar.addEventListener('click', gerarTabuada);