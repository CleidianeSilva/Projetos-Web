// Função para converter o texto para maiúsculas e contar os caracteres
function converterTexto() {
    // Obter o valor da caixa de texto
    var texto = document.getElementById("caixaTexto").value;
  
    // Converter para maiúsculas
    var textoMaiusculo = texto.toUpperCase();
  
    // Contar os caracteres
    var contador = texto.length;
  
    // Atualizar o span com o contador
    var spanContador = document.getElementById("contador");
    spanContador.textContent = contador;
  
    // Atualizar o valor na caixa de texto com o texto convertido para maiúsculas
    document.getElementById("caixaTexto").value = textoMaiusculo;
  }
  
  
