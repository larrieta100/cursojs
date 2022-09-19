/* //funcion suma

function SUMA(a,b) {
    var sum = a + b;
    console.log("la suma es : "+ sum);
}

SUMA(10, 15);

// FUNCION RETORNABLE

function salario() {
    var sal_obrero = 2500;
    console.log("el salario del obrero es:  " + sal_obrero);    
}

// llamando a la funcion
var obrero = salario();

//otra manera de hacer la funcion
function notas() {
    var nota = 20;
    return nota;
}
// llamando a la funcion
var estudiante = notas();
//imprimo en consola.
console.log("la nota del estudiante es : "+ estudiante);

// funciones anonimas (flechas)

var resta = function (n1,n2) {
    return n1 - n2;
}

console.log(resta(10, 5));

//otra forma tipo flecha
var suma = (num1, num2) => num1 + num2;
console.log(suma(10, 5));

//otro ejemplo

var nombre = function () {
    return "luisner";
}
console.log(nombre());

var apellido = () => "arrieta";
console.log(apellido());
*/
// funciones anidadas

function operacion() {
    const PI = 3.14;
    function area_circulo(radio) {
        var area = PI * radio * radio;
        console.log('el area de un circulo es :'+ area);
    }
    operacion.area = area_circulo;
}

var radio = 4;
operacion();
operacion.area(radio);
