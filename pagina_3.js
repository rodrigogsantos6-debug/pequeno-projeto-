function gerarTabuada() {
    const numeroInput = document.getElementById("numeroInput");
    const numero = parseInt(numeroInput.value);
    const resultadoDiv = document.getElementById('resultadoTabuada');
    const backLink = document.getElementById('backLink');

    // Limpa os dados de qualquer tabuada gerada anteriormente
    resultadoDiv.innerHTML = '';

    // Verifica se o campo está inteiramente vazio ou não possui números válidos
    if (numeroInput.value.trim() === "" || isNaN(numero)) {
        backLink.classList.remove('back-link--visivel');
        return;
    }

    let html = `<p class="tabuada-titulo">Tabuada do ${numero}</p>`;

    for (let i = 1; i <= 10; i++) {
        html += `
            <div class="tabuada-linha">
                <span class="tabuada-expr">${numero} × ${i}</span>
                <span class="tabuada-valor">${numero * i}</span>
            </div>`;
    }

    // Adiciona o resultado gerado à tela
    resultadoDiv.innerHTML = html;
    
    // Torna o botão voltar visível após injetar os dados (empurrando-o para baixo)
    backLink.classList.add('back-link--visivel');
}

document.getElementById('btnGerar').addEventListener('click', gerarTabuada);