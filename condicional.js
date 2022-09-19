//condicional if, else
var num1 = 10;
var num2 = 28;

if (num1 > num2) {
    console.log(`el numero: ${num1} es mayor que el numero: ${num2}`);
}
else {
    console.log(`el numero: ${num2} es mayor que el numero: ${num1}`);
}

 
//condicional else-if 
var num1 = 100;
var num2 = 150;

if (num1 > num2) {
    console.log(`el numero: ${num1} es mayor que el numero: ${num2}`)
}
else if (num2 > num1) {
    console.log(`el numero: ${num2} es mayor que el numero: ${num1}`)
}
else {
    console.log(`el numero: ${num1} es Igual que el numero: ${num2}`)
}


var num1 = 10;
var num2 = 11;
var num3 = 12;

if (num1 > num2 && num1 > num3 && num2==num3) {
    console.log(`el numero: ${num1} es mayor que el resto de los numeros y los numeros ${num2} y ${num3} son iguales`)
}
else if (num2 > num1 && num2 > num3 && num1 == num3) {
    console.log(`el numero: ${num2} es mayor que el resto de los numeros y los numeros ${num1} y ${num3} son iguales`)
}
else if (num3 > num1 && num3 > num2 && num1 ==num2 ) {
    console.log(`el numero: ${num3} es mayor que el resto de los numeros y los numeros ${num1} y ${num2} son iguales`)
}
else if (num1 == num2 && num1 > num3 && num2 > num3 ) {
    console.log(`los numeros : ${num1}  y ${num2} son iguales y son mayores que ${num3}`)
}
else if (num2 == num3 && num2 > num1 && num3 > num1) {
    console.log(`los numeros : ${num2}  y ${num3} son iguales y son mayores que ${num1}`)
}
else if (num1 == num3 && num1 > num2 && num3 > num2) {
    console.log(`los numeros : ${num1}  y ${num3} son iguales y son mayores que ${num2}`)
}    
else if (num1 > num2 && num1 > num3) {
    console.log(`el numero: ${num1} es mayor que el resto de los numeros`)
}
else if (num2 > num3 && num2 > num1) {
    console.log(`el numero: ${num2} es mayor que el resto de los numeros`)
}
else if (num3 > num2 && num3 > num1) {
    console.log(`el numero: ${num3} es mayor que el resto de los numeros`)
}
else {
    console.log('todos los numeros son iguales')
}

// switch

let curso = 'python';

switch (curso) {
    case 'php':
        console.log("El curso de php está disponible");
        break;
    case 'java': 
        console.log("El curso de java está disponible");
        break;
    case 'javascript': 
        console.log("El curso de javascript está disponible");
        break;
    default:
        console.log("el curso seleccionado no está disponible");
        break;
}