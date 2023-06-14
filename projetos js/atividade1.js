// Função para calcular o cubo do número
function calculateCube() {
  // Passo 1: Obter o elemento de entrada de texto
  var input = document.getElementById("numero");

  // Passo 2: Obter o elemento de exibição do resultado
  var resultSpan = document.getElementById("resultado");

  // Passo 3: Obter o valor atual da caixa de texto
  var numero = parseFloat(input.value);

  // Passo 4: Verificar se o valor é um número válido
  if (!isNaN(numero)) {
    // Passo 5: Calcular o cubo do número
    var cubo = numero ** 3;

    // Passo 6: Exibir o resultado no span
    resultSpan.textContent = "O cubo de " + numero + " é " + cubo;
  } else {
    // Passo 7: Se o valor não for um número válido, exibir uma mensagem de erro
    resultSpan.textContent = "Por favor, insira um número válido.";
  }
}
