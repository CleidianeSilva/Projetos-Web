function calcularConsumo() {
    // Obter valores dos elementos
    var percursoElement = document.getElementById("percurso");
    var tipoCarroElement = document.getElementById("tipoCarro");
    var arCondicionadoElement = document.getElementById("arCondicionado");
  
    // Converter valores para os tipos corretos
    var percurso = parseFloat(percursoElement.value);
    var consumoBase = parseFloat(tipoCarroElement.value);
    var usarArCondicionado = arCondicionadoElement.checked;
  
    // Calcular consumo estimado
    if (usarArCondicionado) {
      consumoBase = consumoBase / 1.05; // Acréscimo de 5%
    }
  
    var consumoEstimado = percurso / consumoBase;
  
    // Exibir resultado
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Consumo estimado: " + consumoEstimado.toFixed(2) + " litros";
  }
  