function converter() {
    var de = document.getElementById("De").value;
    var para = document.getElementById("Para").value;
    var valor = parseFloat(document.getElementById("valor").value);
    
    var resultado = 0;

    // Fórmulas de conversão para temperatura
 if (de === "Celsius" && para === "Fahrenheit") {
        resultado = (valor * 9/5) + 32;
    } else if (de === "Celsius" && para === "Kelvin") {
        resultado = valor + 273.15;
    } else if (de === "Fahrenheit" && para === "Celsius") {
        resultado = (valor - 32) * 5/9;
    } else if (de === "Fahrenheit" && para === "Kelvin") {
        resultado = (valor - 32) * 5/9 + 273.15;
    } else if (de === "Kelvin" && para === "Celsius") {
        resultado = valor - 273.15;
    } else if (de === "Kelvin" && para === "Fahrenheit") {
        resultado = (valor - 273.15) * 9/5 + 32;
    }

    // Exibindo o resultado formatado na div resultado
    if (resultado !== 0) {
        document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> ${valor} ${de} é igual a ${resultado.toFixed(2)} ${para}.`;
    } else {
        document.getElementById("resultado").innerHTML = "<strong>Erro:</strong> Selecione unidades diferentes para conversão.";
    }
}
