const button = document.getElementById("enviar");

button.addEventListener("click", function () {

    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "abaixo do peso";
    } else if (imc < 25) {
        classificacao = "peso normal";
    } else if (imc < 30) {
        classificacao = "sobrepeso";
    } else {
        classificacao = "obesidade";
    }

    document.getElementById("resultado").innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
});