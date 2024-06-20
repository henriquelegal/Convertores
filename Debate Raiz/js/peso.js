function converterPeso() {
    var de = document.getElementById("De").value;
    var para = document.getElementById("Para").value;
    var valor = parseFloat(document.getElementById("valor").value);
    
    var resultado = 0;

  
    if (de === "Quilogramas" && para === "Gramas") {
        resultado = valor * 1000;
    } else if (de === "Quilogramas" && para === "Libras") {
        resultado = valor * 2.20462;
    } else if (de === "Gramas" && para === "Quilogramas") {
        resultado = valor / 1000;
    } else if (de === "Gramas" && para === "Libras") {
        resultado = valor / 453.592;
    } else if (de === "Libras" && para === "Quilogramas") {
        resultado = valor / 2.20462;
    } else if (de === "Libras" && para === "Gramas") {
        resultado = valor * 453.592;
    } else {
        document.getElementById("resultado").innerHTML = "<strong>Erro:</strong> Selecione unidades diferentes para conversão.";
        return;
    }

    
    document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> ${valor} ${de} é igual a ${resultado.toFixed(2)} ${para}.`;
}