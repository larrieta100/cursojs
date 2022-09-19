// funciones
/*
function area() {
    const PI = 3.14;
    var radio = document.getElementById("radio").Value;
    var resultado = PI * radio * radio;
    document.getElementById("resultado").value = resultado;
}
*/

function suma(event) {
    event.preventDefault();
   let num1 = parsefloat(document.getElementById('num1').Value);
   let num2 = parsefloat(document.getElementById('num2').Value);
   let resultado = num1 + num2;
   document.getElementById('resultado').value = resultado;
}


function suma(event) {
    event.preventDefault();
    let num1 = parsefloat(document.querySelector("#num1").Value);
    let num2 = parsefloat(document.querySelector("#num2").Value);
    let resultado = num1 + num2;
    document.querySelector("#resultado").value = resultado;
}

//<script src="funcion_2.js"> </script>