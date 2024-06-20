function converterComprimento() {
    var de = document.getElementById("De").value;
    var para = document.getElementById("Para").value;
    var valor = parseFloat(document.getElementById("valor").value);

    
    var resultado = 0;


    if (de === "Centímetro" && para === "Metro") {
        resultado = valor / 100;
    } else if (de === "Centímetro" && para === "Milímetro") {
        resultado = valor * 10;
    } else if (de === "Metro" && para === "Centímetro") {
        resultado = valor * 100;
    } else if (de === "Metro" && para === "Milímetro") {
        resultado = valor * 1000;
    } else if (de === "Milímetro" && para === "Centímetro") {
        resultado = valor / 10;
    } else if (de === "Milímetro" && para === "Metro") {
        resultado = valor / 1000;
    } else {
      
        document.getElementById("resultado").innerHTML = "<strong>Erro:</strong> Selecione unidades diferentes para conversão.";
        return;
    }
  document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> ${valor} ${de} é igual a ${resultado.toFixed(2)} ${para}.`;
}