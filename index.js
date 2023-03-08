function calcular() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;


    var resultado;
    if (validarCampos()) {
        resultado = peso / (altura * altura);
        resultado = resultado.toFixed(2);
    }
    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = resultado;
    console.log(resultado);

}

function validarCampos() {
    var altura = document.getElementById("altura");
    var peso = document.getElementById("peso");
    var retorno = true;
    if (altura.value <= 0) {
        altura.style.border = "1px solid red";
        altura.style.outline = "1px solid red";
        altura.focus();
        retorno = false;
    }
    else{
        altura.style.border = "1px solid #dfdddd";
        altura.style.outline = "1px solid #dfdddd";
    }
    if (peso.value <= 0) {
        peso.style.border = "1px solid red";
        peso.style.outline = "1px solid red";
        peso.focus();
        
        retorno = false;
    }
    else {
        peso.style.border = "1px solid #dfdddd";
        peso.style.outline = "1px solid #dfdddd";
    }
    return retorno;
}

function mostrarDados() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var dadosAltura = document.getElementById("dadosAltura");
    var dadosPeso = document.getElementById("dadosPeso");
    dadosAltura.innerHTML = altura;
    dadosPeso.innerHTML = peso;
    console.log("altura:", altura, "peso:", peso);
}

function mudarEstado(el) {
    mostrarDados();
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}