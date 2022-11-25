const resultadoParcialArea = document.querySelector("#parcial-result");
const resultadoTotalArea = document.querySelector("#total-result");
let porcentagemGorjeta = 0;
let pessoas = 1;
let botaoAtual = 0;

function porcentagem(percentage) {
  if (botaoAtual != 0) {
    botaoAtual.classList.remove("button-selected");
  }

  porcentagemGorjeta = percentage;
  document.getElementById("custom").value = "";

  if (percentage > 0) {
    botaoAtual = document.getElementById(`val${percentage}`);
    botaoAtual.classList.add("button-selected");
  }

  gorjeta();
}

function gorjeta() {
  pessoas = Number(document.querySelector("#numberPeople").value);

  if (pessoas <= 0 || pessoas == null || pessoas == "") {
    document.getElementById("pessoas").classList.remove("hide-text-pessoas");
    document.getElementById("box-people").classList.add("outline-pepople");
  } else if (pessoas > 0) {
    document.getElementById("pessoas").classList.add("hide-text-pessoas");
    document.getElementById("box-people").classList.remove("outline-pepople");
  }

  let customValue = Number(document.getElementById("custom").value);

  if (customValue >= 0 && customValue != null && customValue != "") {
    botaoAtual.classList.remove("button-selected");
    porcentagemGorjeta = customValue;
  }

  const price = Number(document.querySelector("#price").value);

  if (price <= 0) {
    document.getElementById("preco").classList.remove("hide-text-preco");
    document.getElementById("box-price").classList.add("outline-price");
  } else if (price > 0) {
    document.getElementById("preco").classList.add("hide-text-preco");
    document.getElementById("box-price").classList.remove("outline-price");
  }

  let gorjeta = (price * porcentagemGorjeta) / 100;

  let gorjetaPorPessoa = gorjeta / pessoas;

  resultadoParcialArea.innerHTML = `$${gorjetaPorPessoa.toFixed(2)}`;

  let totalPorPessoa = price / pessoas + gorjetaPorPessoa;

  resultadoTotalArea.innerHTML = `$${totalPorPessoa.toFixed(2)}`;

  if (totalPorPessoa == Infinity ||isNaN(totalPorPessoa) ||gorjetaPorPessoa == Infinity ||isNaN(gorjetaPorPessoa)){
    resultadoParcialArea.innerHTML = `$0.00`;
    resultadoTotalArea.innerHTML = `$0.00`;
  }
}

function reload() {
  porcentagem(0);

  document.getElementById("price").value = "";
  document.getElementById("numberPeople").value = "";

  resultadoParcialArea.innerHTML = `$0.00`;

  resultadoTotalArea.innerHTML = `$0.00`;
}
