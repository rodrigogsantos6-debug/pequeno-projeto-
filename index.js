// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const numInput = document.getElementById('num');
  const btn = document.getElementById('gerar');
  const resultado = document.getElementById('resultado');
  const LIMIT = 10;

  function limpar() {
    resultado.innerHTML = '';
  }

  function gerar() {
    const n = Number(numInput.value);
    if (!Number.isFinite(n)) {
      resultado.innerHTML = '<tr><td colspan="2" style="padding:12px;color:#fff;">Digite um número válido</td></tr>';
      return;
    }

    limpar();
    for (let i = 1; i <= LIMIT; i++) {
      const tr = document.createElement('tr');
      const tdExpr = document.createElement('td');
      const tdRes = document.createElement('td');

      tdExpr.textContent = `${n} + ${i} =`;
      tdRes.textContent = String(n + i);

      tr.appendChild(tdExpr);
      tr.appendChild(tdRes);
      resultado.appendChild(tr);
    }

    resultado.setAttribute('aria-label', `Tabuada de ${n} de 1 a ${LIMIT}`);
  }

  btn.addEventListener('click', gerar);
  numInput.addEventListener('keydown', e => { if (e.key === 'Enter') gerar(); });

  limpar(); // start empty until user gerar()
});
