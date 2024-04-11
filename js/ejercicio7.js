//7. Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaMultiplicar(numero) {
  console.log("Tabla de multiplicar del " + numero + ":");
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
let num = parseInt(prompt("Ingrese un número"));
if (isNaN(num)) {
  console.log("Ingrese un número válido.");
} else {
  tablaMultiplicar(num);
}
