function converter() {
    var de = document.getElementById("De").value;
    var para = document.getElementById("Para").value;
    var valor = parseFloat(document.getElementById("valor").value);
    
    var resultado = 0;

    if (de === "Litros" && para === "Mililitros") {
        resultado = valor * 1000;
    } else if (de === "Litros" && para === "Galões") {
        resultado = valor * 0.264172;
    } else if (de === "Mililitros" && para === "Litros") {
        resultado = valor / 1000;
    } else if (de === "Mililitros" && para === "Galões") {
        resultado = valor * 0.000264172;
    } else if (de === "Galões" && para === "Litros") {
        resultado = valor * 3.78541;
    } else if (de === "Galões" && para === "Mililitros") {
        resultado = valor * 3785.41;
    }

    // Exibindo o resultado formatado na div resultado
    if (resultado !== 0) {
        document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> ${valor} ${de} é igual a ${resultado.toFixed(2)} ${para}.`;
    } else {
        document.getElementById("resultado").innerHTML = "<strong>Erro:</strong> Selecione unidades diferentes para conversão.";
    }
}
