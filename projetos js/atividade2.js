// Função para verificar o maior número
function verificarMaiorNumero() {
    // Passo 1: Obter os valores das caixas de texto
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
  
    // Passo 2: Verificar qual é o maior número
    var maiorNumero;
  
    if (numero1 >= numero2 && numero1 >= numero3) {
      maiorNumero = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
      maiorNumero = numero2;
    } else {
      maiorNumero = numero3;
    }
  
    // Passo 3: Exibir a mensagem com o resultado
    var resultadoParagrafo = document.getElementById("resultado");
  
    if (!isNaN(maiorNumero)) {
      resultadoParagrafo.textContent = "O maior número é: " + maiorNumero;
    } else {
      resultadoParagrafo.textContent = "Por favor, insira valores válidos em todas as caixas de texto.";
    }
  }
  